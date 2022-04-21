import { BadRequestError } from "../errors";
import { User } from "../models";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { UserDto } from "../dtos";
import tokenService from "./tokenService";

class UserService {
  async register(name: string, email: string, password: string) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw new BadRequestError(
        `User with this email already exists: ${email}`
      );
    }

    const activationLink = uuidv4();

    const user = await User.create({ name, email, password, activationLink });

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    return { ...tokens, user: userDto };
  }
}

export default new UserService();
