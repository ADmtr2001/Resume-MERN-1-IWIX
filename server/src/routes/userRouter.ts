import { Router } from "express";
import { userController } from "../controllers";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getSingleUser);
router.get("/:id/comments", userController.getAllComments);

export default router;
