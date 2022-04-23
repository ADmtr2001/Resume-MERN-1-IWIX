import { Request, Response } from "express";
import { userService } from "../services";

class UserController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const userData = await userService.login(email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  }

  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userData = await userService.register(req, name, email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  }

  async logout(req: Request, res: Response) {
    const { refreshToken } = req.cookies;
    const token = await userService.logout(refreshToken);
    res.clearCookie("refreshToken");
    return res.json(token);
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.json(users);
  }

  async getSingleUser(req: Request, res: Response) {
    const { id } = req.params;
    const user = await userService.getSingleUser(id);
    res.json(user);
  }

  async activate(req: Request, res: Response) {
    const { link: activationLink } = req.params;
    await userService.activate(activationLink);
    return res.redirect(process.env.CLIENT_URL!);
  }

  async refresh(req: Request, res: Response) {
    const { refreshToken } = req.cookies;
    const userData = await userService.refresh(refreshToken);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  }
}

export default new UserController();
