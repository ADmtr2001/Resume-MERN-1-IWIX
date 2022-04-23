import { Router } from "express";
import { categoryController } from "../controllers";

const router = Router();

router
  .route("/")
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);
router
  .route("/:id")
  .get(categoryController.getSingleCategory)
  .delete(categoryController.deleteCategory);

export default router;
