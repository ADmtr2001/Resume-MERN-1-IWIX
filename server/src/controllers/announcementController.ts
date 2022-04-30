import { Request, Response } from "express";

import { StatusCodes } from "http-status-codes";

import { announcementService } from "../services";
import {
  checkPermission,
  moveFileToLocalFolder,
  deleteFileFromLocalFolder,
} from "../utils";

class AnnouncementController {
  async getAllAnnouncements(req: Request, res: Response) {
    const { page = 1, searchQuery = "" } = req.query;

    const limit = 4;
    const startIndex = (Number(page) - 1) * limit;

    let announcements: any;
    let total: any;

    if (searchQuery) {
      const searchQueryReg = new RegExp(searchQuery as string, "i");
      ({ announcements, total } = await announcementService.getAllAnnouncements(
        limit,
        startIndex,
        searchQueryReg
      ));
    } else {
      ({ announcements, total } = await announcementService.getAllAnnouncements(
        limit,
        startIndex
      ));
    }

    res.status(StatusCodes.OK).json({
      announcements,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / limit),
    });
  }

  async createAnnouncement(req: Request, res: Response) {
    const { title, category, description, location, phoneNumber, price } =
      req.body;
    // @ts-ignore
    const { image } = req.files;

    const fileName = moveFileToLocalFolder(image, "announcementImages");

    const announcement = await announcementService.createAnnouncement(
      title,
      category,
      description,
      location,
      phoneNumber,
      fileName,
      price,
      req.user.id
    );

    res.status(StatusCodes.CREATED).json(announcement);
  }

  async getSingleAnnouncement(req: Request, res: Response) {
    const { id } = req.params;
    const announcement = await announcementService.getSingleAnnouncement(id);
    res.status(StatusCodes.OK).json(announcement);
  }

  async updateAnnouncement(req: Request, res: Response) {
    const { id } = req.params;
    const { title, category, description, location, phoneNumber, price } =
      req.body;
    // @ts-ignore
    const { image } = req.files;

    const previousAnnouncement =
      await announcementService.getSingleAnnouncement(id);
    checkPermission(req.user, previousAnnouncement.creator);

    const fileName = moveFileToLocalFolder(image, "announcementImages");

    deleteFileFromLocalFolder("announcementImages", previousAnnouncement.image);

    const announcement = await announcementService.updateAnnouncement(
      id,
      title,
      category,
      description,
      location,
      phoneNumber,
      price,
      fileName
    );

    res.status(StatusCodes.OK).json(announcement);
  }

  async deleteAnnouncement(req: Request, res: Response) {
    const { id } = req.params;

    const announcement = await announcementService.getSingleAnnouncement(id);
    checkPermission(req.user, announcement.creator);

    await announcementService.deleteAnnouncement(id);

    deleteFileFromLocalFolder("announcementImages", announcement.image);

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
