import { Router } from "express";
import { commentController } from "../controllers";

const router = Router();

router
  .route("/")
  .get(commentController.getAllComments)
  .post(commentController.createComment);
router
  .route("/:id")
  .get(commentController.getSingleComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);
router.get("/user/:userId", commentController.getAllUserComments);

export default router;
