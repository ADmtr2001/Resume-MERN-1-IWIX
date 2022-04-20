import { Request, Response, NextFunction } from "express";

class CategoryController {
  async createCategory(req: Request, res: Response, next: NextFunction) {
    res.send("Create Category");
  }

  async getAllCategories(req: Request, res: Response, next: NextFunction) {
    res.send("Get All Categories");
  }
}

export default new CategoryController();
