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
    const { refreshToken } = req.cookies;
    const token = await userService.logout(refreshToken);
    res.clearCookie("refreshToken");
    return res.json(token);
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    const users = await userService.getAllUsers();
    res.json(users);
  }

  async getSingleUser(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const user = await userService.getSingleUser(id);
    res.json(user);
  }

  async activate(req: Request, res: Response, next: NextFunction) {
    const { link: activationLink } = req.params;
    await userService.activate(activationLink);
    return res.redirect(process.env.CLIENT_URL!);
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    res.send("Refresh");
  }

  async getAllComments(req: Request, res: Response, next: NextFunction) {
    res.send("Get All Comments");
  }
}

export default new UserController();
