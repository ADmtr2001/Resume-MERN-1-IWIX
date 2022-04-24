import { Router } from "express";
import { categoryController } from "../controllers";
import { authMiddleware, roleMiddleware } from "../middleware";

const router = Router();

router
  .route("/")
  .get(categoryController.getAllCategories)
  .post(
    authMiddleware,
    roleMiddleware("admin"),
    categoryController.createCategory
  );
router
  .route("/:id")
  .get(categoryController.getSingleCategory)
  .delete(
    authMiddleware,
    roleMiddleware("admin"),
    categoryController.deleteCategory
  );

export default router;
