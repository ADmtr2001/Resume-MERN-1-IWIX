import { Request, Response, NextFunction } from "express";
import { userService } from "../services";

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const userData = await userService.login(email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  }

  async register(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;
    const userData = await userService.register(req, name, email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    res.send("Logout");
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    res.send("Get All Users");
  }

  async getSingleUser(req: Request, res: Response, next: NextFunction) {
    res.send("Get Single User");
  }

  async activate(req: Request, res: Response, next: NextFunction) {
    res.send("Activate");
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    res.send("Refresh");
  }

  async getAllComments(req: Request, res: Response, next: NextFunction) {
    res.send("Get All Comments");
  }
}

export default new UserController();
