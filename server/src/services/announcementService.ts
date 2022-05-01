import { Types } from "mongoose";

import { NotFoundError } from "../errors";
import { Announcement } from "../models";

class AnnouncementService {
  async getAllAnnouncements(
    limit: number,
    startIndex: number,
    searchQuery: RegExp = new RegExp("", "i")
  ) {
    const total = await Announcement.countDocuments({ title: searchQuery });
    const announcements = await Announcement.find({ title: searchQuery })
      .limit(limit)
      .skip(startIndex);
    return { announcements, total };
  }

  async createAnnouncement(
    title: string,
    category: Types.ObjectId,
    description: string,
    location: string,
    email: string,
    phoneNumber: string,
    image: string,
    price: number,
    creator: Types.ObjectId
  ) {
    const announcement = await Announcement.create({
      title,
      category,
      description,
      location,
      email,
      phoneNumber,
      image,
      price,
      creator,
    });
    return announcement;
  }

  async getSingleAnnouncement(announcementId: string) {
    const announcement = await Announcement.findOne({ _id: announcementId });
    if (!announcement) {
      throw new NotFoundError(`No announcement with id: ${announcementId}`);
    }
    return announcement;
  }

  async updateAnnouncement(
    announcementId: string,
    title: string,
    category: Types.ObjectId,
    description: string,
    location: string,
    email: string,
    phoneNumber: string,
    price: number,
    image: string
  ) {
    const announcement = await Announcement.findOneAndUpdate(
      { _id: announcementId },
      {
        title,
        category,
        description,
        location,
        email,
        phoneNumber,
        price,
        image,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return announcement;
  }

  async deleteAnnouncement(announcementId: string) {
    const announcement = await Announcement.deleteOne({ _id: announcementId });
    return announcement;
  }

  async getAllUserAnnouncements(userId: string) {
    const announcements = await Announcement.find({ creator: userId });
    return announcements;
  }
}

export default new AnnouncementService();
