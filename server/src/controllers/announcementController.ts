import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { announcementService } from "../services";
import { deleteFile } from "../utils/deleteFile";

class AnnouncementController {
  async createAnnouncement(req: Request, res: Response) {
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

  async getAllAnnouncements(req: Request, res: Response) {
    const announcements = await announcementService.getAllAnnouncements();
    res.json(announcements);
  }

  async getSingleAnnouncement(req: Request, res: Response) {
    const { id } = req.params;
    const announcement = await announcementService.getSingleAnnouncement(id);
    res.json(announcement);
  }

  async updateAnnouncement(req: Request, res: Response) {
    const { id } = req.params;
    const { title, category, description, location, phoneNumber } = req.body;
    const previousAnnouncement =
      await announcementService.getSingleAnnouncement(id);
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
    const previousFilePath = path.resolve(
      __dirname,
      "..",
      "public",
      "uploads",
      "announcementImages",
      previousAnnouncement.image
    );
    deleteFile(previousFilePath);
    const announcement = await announcementService.updateAnnouncement(
      id,
      title,
      category,
      description,
      location,
      phoneNumber,
      fileName
    );
    res.json(announcement);
  }

  async deleteAnnouncement(req: Request, res: Response) {
    const { id } = req.params;
    const announcement = await announcementService.getSingleAnnouncement(id);
    const deletedAnnouncement = await announcementService.deleteAnnouncement(
      id
    );
    const imagePath = path.resolve(
      __dirname,
      "..",
      "public",
      "uploads",
      "announcementImages",
      announcement.image
    );
    deleteFile(imagePath);
    res.json(deletedAnnouncement);
  }
}

export default new AnnouncementController();
