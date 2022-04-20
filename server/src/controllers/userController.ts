import { Request, Response, NextFunction } from "express";

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    res.send('Login')
  }

  async register(req: Request, res: Response, next: NextFunction) {
    res.send('Register')
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    res.send('Logout')
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    res.send('Get All Users')
  }

  async getSingleUser(req: Request, res: Response, next: NextFunction) {
    res.send('Get Single User')
  }

  async activate(req: Request, res: Response, next: NextFunction) {
    res.send('Activate')
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    res.send('Refresh')
  }

  async getAllComments(req: Request, res: Response, next: NextFunction) {
    res.send('Get All Comments')
  }
}

export default new UserController();
