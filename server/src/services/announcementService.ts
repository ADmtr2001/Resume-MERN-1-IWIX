import { Types } from "mongoose";
import { NotFoundError } from "../errors";
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

  async getAllAnnouncements() {
    const announcements = await Announcement.find({});
    return announcements;
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
    phoneNumber: string,
    image: string
  ) {
    const announcement = await Announcement.findOneAndUpdate(
      { _id: announcementId },
      {
        title,
        category,
        description,
        location,
        phoneNumber,
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
}

export default new AnnouncementService();
