import { Request } from "express";

import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors";

import { User } from "../models";
import { UserDto } from "../dtos";
import { IUser } from "../models/User";

import { v4 as uuidv4 } from "uuid";

import tokenService from "./tokenService";
import mailService from "./mailService";

import { getApiUrl, comparePassword } from "../utils";

class UserService {
  async register(req: Request, name: string, email: string, password: string) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw new BadRequestError(`User already exists: ${email}`);
    }

    const activationLink = uuidv4();

    const user = await User.create({ name, email, password, activationLink });

    await mailService.sendActivationMail(
      email,
      `${getApiUrl(req)}/api/v1/user/activate/${activationLink}`
    );

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto._id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new BadRequestError(`User doesn't exist: ${email}`);
    }

    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      throw new BadRequestError("Wrong Password");
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto._id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken: string) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async activate(activationLink: string) {
    const user = await User.findOne({ activationLink });
    if (!user) {
      throw new BadRequestError("Incorrect activation link");
    }
    user.isActivated = true;
    await user.save();
  }

  async getAllUsers() {
    const users = await User.find({}, { password: 0, activationLink: 0 });
    return users;
  }

  async getSingleUser(userId: string) {
    const user = await User.findOne(
      { _id: userId },
      { password: 0, activationLink: 0 }
    );
    if (!user) {
      throw new NotFoundError(`User doesn't exist: ${userId}`);
    }
    return user;
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      console.log("There're no refresh token");
      throw new UnauthenticatedError("Not authorized");
    }

    const userData: any = await tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw new UnauthenticatedError("Not authorized");
    }

    const user: IUser | null = await User.findById(userData._id);
    if (!user) {
      throw new BadRequestError("Something went wrong while getting user");
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto._id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}

export default new UserService();
