import { Router } from "express";

import { userController } from "../controllers";

import { authMiddleware, roleMiddleware } from "../middleware";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/:id", userController.getSingleUser);
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  userController.getAllUsers
);

export default router;
