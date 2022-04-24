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

  async getAllAnnouncements(limit: number, startIndex: number) {
    const total = await Announcement.countDocuments({});
    const announcements = await Announcement.find({})
      .limit(limit)
      .skip(startIndex);
    return { announcements, total };
  }

  async getAnnouncementsBySearch(
    searchQuery: RegExp,
    limit: number,
    startIndex: number
  ) {
    const total = await Announcement.countDocuments({ title: searchQuery });
    const announcements = await Announcement.find({ title: searchQuery })
      .limit(limit)
      .skip(startIndex);
    return { announcements, total };
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

  async getAllUserAnnouncements(userId: string) {
    const announcements = await Announcement.find({ creator: userId });
    return announcements;
  }

  async getAll(
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
}

export default new AnnouncementService();
