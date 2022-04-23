import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { categoryService } from "../services";
import { deleteFile } from "../utils/deleteFile";

class CategoryController {
  async createCategory(req: Request, res: Response) {
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

  async getAllCategories(req: Request, res: Response) {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  }

  async getSingleCategory(req: Request, res: Response) {
    const { id } = req.params;
    const category = await categoryService.getSingleCategory(id);
    res.json(category);
  }

  async deleteCategory(req: Request, res: Response) {
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
    deleteFile(filePath);
    const deletedCategory = await categoryService.deleteCategory(id);
    res.json(category);
  }
}

export default new CategoryController();
