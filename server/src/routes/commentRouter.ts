import { Router } from "express";
import { commentController } from "../controllers";
import { authMiddleware } from "../middleware";

const router = Router();

router
  .route("/")
  .get(commentController.getAllComments)
  .post(authMiddleware, commentController.createComment);
router
  .route("/:id")
  .get(commentController.getSingleComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);
router.get("/user/:id", commentController.getAllUserComments);

export default router;
