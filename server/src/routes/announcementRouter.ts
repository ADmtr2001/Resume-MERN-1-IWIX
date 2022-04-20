import { Router } from "express";
import { announcementController } from "../controllers";

const router = Router();

router
  .route("/")
  .get(announcementController.getAllAnnouncements)
  .post(announcementController.createAnnouncement);
router.route("/uploadImage").post(announcementController.uploadImage);
router
  .route("/:id")
  .get(announcementController.getSingleAnnouncement)
  .patch(announcementController.updateAnnouncement)
  .delete(announcementController.deleteAnnouncement);

export default router;
