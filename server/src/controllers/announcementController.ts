import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { announcementService } from "../services";
import { deleteFile } from "../utils/deleteFile";
import { checkPermission } from "../utils";
import { StatusCodes } from "http-status-codes";

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
    res.status(StatusCodes.CREATED).json(announcement);
  }

  async getAllAnnouncements(req: Request, res: Response) {
    const { page = 1 } = req.query;

    const limit = 4;
    const startIndex = (Number(page) - 1) * limit;
    const { announcements, total } =
      await announcementService.getAllAnnouncements(limit, startIndex);
    res.status(StatusCodes.OK).json({
      announcements,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / limit),
    });
  }

  async getAnnouncementsBySearch(req: Request, res: Response) {
    const { page = 1, searchQuery = "" } = req.query;

    const searchQueryReg = new RegExp(searchQuery as string, "i");
    const limit = 4;
    const startIndex = (Number(page) - 1) * limit;
    const { announcements, total } =
      await announcementService.getAnnouncementsBySearch(
        searchQueryReg,
        limit,
        startIndex
      );
    res.status(StatusCodes.OK).json({
      announcements,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / limit),
    });
  }

  async getSingleAnnouncement(req: Request, res: Response) {
    const { id } = req.params;
    const announcement = await announcementService.getSingleAnnouncement(id);
    res.status(StatusCodes.OK).json(announcement);
  }

  async updateAnnouncement(req: Request, res: Response) {
    const { id } = req.params;
    const { title, category, description, location, phoneNumber } = req.body;
    const previousAnnouncement =
      await announcementService.getSingleAnnouncement(id);
    checkPermission(req.user, previousAnnouncement.creator);
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
    res.status(StatusCodes.OK).json(announcement);
  }

  async deleteAnnouncement(req: Request, res: Response) {
    const { id } = req.params;
    const announcement = await announcementService.getSingleAnnouncement(id);
    checkPermission(req.user, announcement.creator);
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
    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Announcement removed" });
  }

  async getAllUserAnnouncements(req: Request, res: Response) {
    const { id } = req.params;
    const announcements = await announcementService.getAllUserAnnouncements(id);
    res.status(StatusCodes.OK).json(announcements);
  }
}

export default new AnnouncementController();
