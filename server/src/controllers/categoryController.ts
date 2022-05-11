import { Request, Response } from "express";

import { StatusCodes } from "http-status-codes";

import { categoryService } from "../services";
import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

class CategoryController {
  async getAllCategories(req: Request, res: Response) {
    const categories = await categoryService.getAllCategories();
    res.status(StatusCodes.OK).json(categories);
  }

  async createCategory(req: Request, res: Response) {
    const { name } = req.body;
    const file = await cloudinary.uploader.upload(
      // @ts-ignore
      req.files.image.tempFilePath,
      {
        folder: "Categories",
      }
    );

    const category = await categoryService.createCategory(
      name,
      file.secure_url,
      file.public_id
    );

    // @ts-ignore
    fs.unlinkSync(req.files.image.tempFilePath);

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

    await cloudinary.uploader.destroy(category.imageId);

    await categoryService.deleteCategory(id);
    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Category removed" });
  }
}

export default new CategoryController();
