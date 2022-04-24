import { Router } from "express";
import { announcementController } from "../controllers";
import { authMiddleware } from "../middleware";

const router = Router();

router
  .route("/")
  .get(authMiddleware, announcementController.getAllAnnouncements)
  .post(authMiddleware, announcementController.createAnnouncement);
router
  .route("/:id")
  .get(authMiddleware, announcementController.getSingleAnnouncement)
  .patch(authMiddleware, announcementController.updateAnnouncement)
  .delete(authMiddleware, announcementController.deleteAnnouncement);

export default router;
