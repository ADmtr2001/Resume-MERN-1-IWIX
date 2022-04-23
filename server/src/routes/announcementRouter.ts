import { Router } from "express";
import { announcementController } from "../controllers";
import { authMiddleware } from "../middleware";

const router = Router();

router
  .route("/")
  .get(announcementController.getAllAnnouncements)
  .post(authMiddleware, announcementController.createAnnouncement);
router.route("/uploadImage").post(announcementController.uploadImage);
router
  .route("/:id")
  .get(announcementController.getSingleAnnouncement)
  .patch(announcementController.updateAnnouncement)
  .delete(announcementController.deleteAnnouncement);

export default router;
