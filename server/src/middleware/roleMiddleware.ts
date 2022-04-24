import { Request, Response, NextFunction } from "express";
import { UnauthenticatedError, UnauthorizedError } from "../errors";
import { tokenService } from "../services";

const roleMiddleware = (...roles: [string]) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("You don't have access");
    }
    next();
  };
};

export default roleMiddleware;