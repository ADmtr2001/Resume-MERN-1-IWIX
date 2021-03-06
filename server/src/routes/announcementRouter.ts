import { Router } from "express";

import { announcementController } from "../controllers";

import { authMiddleware } from "../middleware";

const router = Router();

router
  .route("/")
  .get(announcementController.getAllAnnouncements)
  .post(authMiddleware, announcementController.createAnnouncement);

router.get("/vip", announcementController.getVipAnnouncements);

router.get("/user/:id", announcementController.getAllUserAnnouncements);

router
  .route("/:id")
  .get(announcementController.getSingleAnnouncement)
  .patch(authMiddleware, announcementController.updateAnnouncement)
  .delete(authMiddleware, announcementController.deleteAnnouncement);

export default router;
