import { Request, Response } from "express";

import { StatusCodes } from "http-status-codes";

import { categoryService } from "../services";
import { deleteFileFromLocalFolder, moveFileToLocalFolder } from "../utils";

class CategoryController {
  async getAllCategories(req: Request, res: Response) {
    const categories = await categoryService.getAllCategories();
    res.status(StatusCodes.OK).json(categories);
  }

  async createCategory(req: Request, res: Response) {
    const { name } = req.body;
    // @ts-ignore
    const { image } = req.files;

    const fileName = moveFileToLocalFolder(image, "categoryImages");

    // ?PROBABLY CHANGE FILE NAME
    const category = await categoryService.createCategory(name, fileName);

    res.status(StatusCodes.CREATED).json(category);
  }

  async getSingleCategory(req: Request, res: Response) {
    const { id } = req.params;
    const category = await categoryService.getSingleCategory(id);
    res.status(StatusCodes.OK).json(category);
  }

  async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;

    const category = await categoryService.getSingleCategory(id);

    deleteFileFromLocalFolder("categoryImages", category.image);

    await categoryService.deleteCategory(id);
    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Category removed" });
  }
}

export default new CategoryController();
