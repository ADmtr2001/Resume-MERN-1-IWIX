import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { categoryService } from "../services";
import fs from "fs";
import { BadRequestError } from "../errors";

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

  async getSingleCategory(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const category = await categoryService.getSingleCategory(id);
    res.json(category);
  }

  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const category = await categoryService.getSingleCategory(id);
    const filePath = path.resolve(
      __dirname,
      "..",
      "public",
      "uploads",
      "categoryImages",
      category.image
    );
    fs.unlink(filePath, (error) => {
      if (error) {
        throw new BadRequestError(
          `Something went wrong while deleting previous image: ${error.message}`
        );
      }
    });
    const deletedCategory = await categoryService.deleteCategory(id);
    res.json(category);
  }
}

export default new CategoryController();
