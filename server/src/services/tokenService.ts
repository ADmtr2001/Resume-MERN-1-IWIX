import jwt from "jsonwebtoken";
import { UserDto } from "../dtos";
import { Token } from "../models";

class TokenService {
  generateTokens(payload: UserDto) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
      expiresIn: "15min",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }
}

export default new TokenService();
