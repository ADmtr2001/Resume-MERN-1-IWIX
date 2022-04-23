import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { categoryService } from "../services";

class CategoryController {
  async createCategory(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    // @ts-ignore
    const { image } = req.files;
    const fileName = uuidv4() + ".jpg";
    const filePath = path.resolve(
      __dirname,
      "..",
      "public",
      "uploads",
      "categoryImages",
      fileName
    );
    // @ts-ignore
    image.mv(filePath);
    // ?PROBABLY CHANGE FILE NAME
    const category = await categoryService.createCategory(name, fileName);
    res.json(category);
  }

  async getAllCategories(req: Request, res: Response, next: NextFunction) {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  }
}

export default new CategoryController();
