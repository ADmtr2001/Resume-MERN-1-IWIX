import { Types } from "mongoose";

import { NotFoundError } from "../errors";
import { Announcement } from "../models";

class AnnouncementService {
  async getAllAnnouncements(
    limit: number,
    startIndex: number,
    searchQuery: string,
    category: string,
    sort: string,
    from: string,
    to: string,
    creator: string
  ) {
    const conditions: {
      [index: string]: string | RegExp | { [index: string]: string | number };
    }[] = [];
    if (searchQuery) {
      const searchQueryReg = new RegExp(searchQuery, "i");
      conditions.push({ title: searchQueryReg });
    }
    if (category) {
      conditions.push({ category });
    }
    if (from) {
      conditions.push({ price: { $gte: Number(from) } });
    }
    if (to) {
      conditions.push({ price: { $lte: Number(to) } });
    }
    if (creator) {
      conditions.push({ creator });
    }
    const finalConditions = conditions.length ? { $and: conditions } : {};

    let sortCondition: { [index: string]: number } = {};
    if (sort) {
      switch (sort) {
        case "asc":
          sortCondition = { price: 1 };
          break;
        case "dsc":
          sortCondition = { price: -1 };
          break;
        case "new":
          sortCondition = { createdAt: -1 };
          break;
        case "old":
          sortCondition = { createdAt: 1 };
          break;
        default:
          break;
      }
    }

    const total = await Announcement.countDocuments(finalConditions);
    const announcements = await Announcement.find(finalConditions)
      .sort(sortCondition)
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
    const data: { [index: string]: string | number | Types.ObjectId } = {
      title,
      category,
      description,
      location,
      email,
      phoneNumber,
      price,
    };

    if (image) {
      data.image = image;
    }

    const announcement = await Announcement.findOneAndUpdate(
      { _id: announcementId },
      data,
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

  async getVipAnnouncements() {
    const announcements = await Announcement.find({ isVip: true });
    return announcements;
  }
}

export default new AnnouncementService();
