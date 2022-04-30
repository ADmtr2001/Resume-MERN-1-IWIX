import { Schema, model, Types } from "mongoose";

export interface IAnnouncement {
  title: string;
  category: Types.ObjectId;
  price: number;
  image: string;
  description: string;
  location: string;
  phoneNumber: string;
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
    price: {
      type: Number,
      required: [true, "Please provide price"],
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

const Announcement = model<IAnnouncement>("Announcement", announcementSchema);

export default Announcement;
