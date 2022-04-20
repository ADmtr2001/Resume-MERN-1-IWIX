import { Router } from "express";
import { categoryController } from "../controllers";

const router = Router();

router
  .route("/")
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);

export default router;
