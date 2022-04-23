import { Request, Response, NextFunction } from "express";

class AnnouncementController {
  async createAnnouncement(req: Request, res: Response, next: NextFunction) {
    const { title, category, description, location, phoneNumber } = req.body;
    res.json(req.user);
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
