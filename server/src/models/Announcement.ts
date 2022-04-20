import { Schema, model, Types } from "mongoose";

interface IAnnouncement {
  title: string;
  category: Types.ObjectId;
  image: String;
  description: String;
  location: String;
  phoneNumber: String;
  isVip: boolean;
  creator: Types.ObjectId;
}

const announcementSchema = new Schema<IAnnouncement>(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Please provide category"],
    },
    image: {
      type: String,
      default: "/uploads/placeholder.png",
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
    },
    location: {
      type: String,
      required: [true, "Please provide location"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide phone number"],
    },
    isVip: {
      type: Boolean,
      default: false,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

const Announcement = model<IAnnouncement>("Category", announcementSchema);

export default Announcement;
