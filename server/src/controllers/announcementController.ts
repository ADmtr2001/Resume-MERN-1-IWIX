import { Request, Response } from "express";

import { StatusCodes } from "http-status-codes";

import { announcementService } from "../services";
import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

import { checkPermission } from "../utils";

class AnnouncementController {
  async getAllAnnouncements(req: Request, res: Response) {
    const {
      page = 1,
      searchQuery = "",
      category = "",
      from = "",
      to = "",
      sort = "",
      creator = "",
    } = req.query;

    const limit = 12;
    const startIndex = (Number(page) - 1) * limit;

    const { announcements, total } =
      await announcementService.getAllAnnouncements(
        limit,
        startIndex,
        searchQuery as string,
        category as string,
        sort as string,
        from as string,
        to as string,
        creator as string
      );

    res.status(StatusCodes.OK).json({
      announcements,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / limit),
    });
  }

  async createAnnouncement(req: Request, res: Response) {
    const {
      title,
      category,
      description,
      location,
      email,
      phoneNumber,
      price,
    } = req.body;
    const file = await cloudinary.uploader.upload(
      // @ts-ignore
      req.files.image.tempFilePath,
      {
        folder: "Announcements",
      }
    );

    const announcement = await announcementService.createAnnouncement(
      title,
      category,
      description,
      location,
      email,
      phoneNumber,
      file.secure_url,
      file.public_id,
      price,
      req.user._id
    );

    // @ts-ignore
    fs.unlinkSync(req.files.image.tempFilePath);

    res.status(StatusCodes.CREATED).json(announcement);
  }

  async getSingleAnnouncement(req: Request, res: Response) {
    const { id } = req.params;
    const announcement = await announcementService.getSingleAnnouncement(id);
    res.status(StatusCodes.OK).json(announcement);
  }

  async updateAnnouncement(req: Request, res: Response) {
    const { id } = req.params;
    const {
      title,
      category,
      description,
      location,
      email,
      phoneNumber,
      price,
    } = req.body;
    let fileName = "";
    let fileId = "";

    if (req.files) {
      const previousAnnouncement =
        await announcementService.getSingleAnnouncement(id);
      checkPermission(req.user, previousAnnouncement.creator);

      const file = await cloudinary.uploader.upload(
        // @ts-ignore
        req.files.image.tempFilePath,
        {
          folder: "Announcements",
        }
      );
      fileName = file.secure_url;
      fileId = file.public_id;

      await cloudinary.uploader.destroy(previousAnnouncement.imageId);

      // @ts-ignore
      fs.unlinkSync(req.files.image.tempFilePath);
    }

    const announcement = await announcementService.updateAnnouncement(
      id,
      title,
      category,
      description,
      location,
      email,
      phoneNumber,
      price,
      fileName,
      fileId
    );

    res.status(StatusCodes.OK).json(announcement);
  }

  async deleteAnnouncement(req: Request, res: Response) {
    const { id } = req.params;

    const announcement = await announcementService.getSingleAnnouncement(id);
    checkPermission(req.user, announcement.creator);
    await announcementService.deleteAnnouncement(id);

    await cloudinary.uploader.destroy(announcement.imageId);

    res
      .status(StatusCodes.OK)
      .json({ success: true, message: "Announcement removed" });
  }

  async getAllUserAnnouncements(req: Request, res: Response) {
    const { id } = req.params;
    const announcements = await announcementService.getAllUserAnnouncements(id);
    res.status(StatusCodes.OK).json(announcements);
  }

  async getVipAnnouncements(req: Request, res: Response) {
    const announcements = await announcementService.getVipAnnouncements();
    res.status(StatusCodes.OK).json(announcements);
  }
}

export default new AnnouncementController();
