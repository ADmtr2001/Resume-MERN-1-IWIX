import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { announcementService } from "../services";

class AnnouncementController {
  async createAnnouncement(req: Request, res: Response, next: NextFunction) {
    const { title, category, description, location, phoneNumber } = req.body;
    // @ts-ignore
    const { image } = req.files;
    const fileName = uuidv4() + ".jpg";
    const filePath = path.resolve(
      __dirname,
      "..",
      "public",
      "uploads",
      "announcementImages",
      fileName
    );
    // @ts-ignore
    image.mv(filePath);
    const announcement = await announcementService.createAnnouncement(
      title,
      category,
      description,
      location,
      phoneNumber,
      fileName,
      req.user.id
    );
    res.json(announcement);
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
