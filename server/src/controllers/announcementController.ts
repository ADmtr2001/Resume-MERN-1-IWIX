import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors";

class AnnouncementController {
  async createAnnouncement(req: Request, res: Response, next: NextFunction) {
    res.send("Create Announcement");
  }

  async getAllAnnouncements(req: Request, res: Response, next: NextFunction) {
    res.send("Get All Announcements");
  }

  async uploadImage(req: Request, res: Response, next: NextFunction) {
    res.send("Upload Image");
  }

  async getSingleAnnouncement(req: Request, res: Response, next: NextFunction) {
    res.send("Get Single Announcement");
  }

  async updateAnnouncement(req: Request, res: Response, next: NextFunction) {
    res.send("Update Announcement");
  }

  async deleteAnnouncement(req: Request, res: Response, next: NextFunction) {
    res.send("Delete Announcement");
  }
}

export default new AnnouncementController();
