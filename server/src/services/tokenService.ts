import jwt from "jsonwebtoken";

import { UserDto } from "../dtos";
import { Token } from "../models";

import { Types } from "mongoose";

class TokenService {
  generateTokens(payload: UserDto) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
      expiresIn: process.env.JWT_ACCESS_DURATION,
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
      expiresIn: process.env.JWT_REFRESH_DURATION,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId: Types.ObjectId, refreshToken: string) {
    const tokenData = await Token.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({ user: userId, refreshToken });
    return token;
  }

  async removeToken(refreshToken: string) {
    const tokenData = await Token.deleteOne({ refreshToken });
    return tokenData;
  }

  async validateRefreshToken(refreshToken: string) {
    const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
    return userData;
  }

  async validateAccessToken(accessToken: string) {
    const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!);
    return userData;
  }

  async findToken(refreshToken: string) {
    const tokenData = await Token.findOne({ refreshToken });
    return tokenData;
  }
}

export default new TokenService();
