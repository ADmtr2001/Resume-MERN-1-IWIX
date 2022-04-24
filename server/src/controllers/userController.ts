import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userService } from "../services";

class UserController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const userData = await userService.login(email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(StatusCodes.OK).json(userData);
  }

  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userData = await userService.register(req, name, email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(StatusCodes.CREATED).json(userData);
  }

  async logout(req: Request, res: Response) {
    const { refreshToken } = req.cookies;
    await userService.logout(refreshToken);
    res.clearCookie("refreshToken");
    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "User logged out" });
  }

  async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.status(StatusCodes.OK).json(users);
  }

  async getSingleUser(req: Request, res: Response) {
    const { id } = req.params;
    const user = await userService.getSingleUser(id);
    res.status(StatusCodes.OK).json(user);
  }

  async activate(req: Request, res: Response) {
    const { link: activationLink } = req.params;
    await userService.activate(activationLink);
    res.status(StatusCodes.OK).redirect(process.env.CLIENT_URL!);
  }

  async refresh(req: Request, res: Response) {
    const { refreshToken } = req.cookies;
    const userData = await userService.refresh(refreshToken);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(StatusCodes.OK).json(userData);
  }
}

export default new UserController();
