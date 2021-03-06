import { Router } from "express";

import { commentController } from "../controllers";

import { authMiddleware, roleMiddleware } from "../middleware";

const router = Router();

router
  .route("/")
  .get(
    authMiddleware,
    roleMiddleware("admin"),
    commentController.getAllComments
  )
  .post(authMiddleware, commentController.createComment);

router.get("/user/:id", commentController.getAllUserComments);

router
  .route("/:id")
  .get(authMiddleware, commentController.getSingleComment)
  .patch(authMiddleware, commentController.updateComment)
  .delete(authMiddleware, commentController.deleteComment);

export default router;
