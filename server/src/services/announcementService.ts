import { Types } from "mongoose";
import { Announcement } from "../models";

class AnnouncementService {
  async createAnnouncement(
    title: string,
    category: Types.ObjectId,
    description: string,
    location: string,
    phoneNumber: string,
    image: string,
    creator: Types.ObjectId
  ) {
    const announcement = await Announcement.create({
      title,
      category,
      description,
      location,
      phoneNumber,
      image,
      creator,
    });
    return announcement;
  }

  async getAllAnnouncements() {}

  async getSingleAnnouncement() {}

  async updateAnnouncement() {}

  async deleteAnnouncement() {}
}

export default new AnnouncementService();
