import { Schema, model, Types } from "mongoose";

export interface IAnnouncement {
  title: string;
  category: Types.ObjectId;
  price: number;
  image: string;
  description: string;
  location: string;
  email: string;
  phoneNumber: string;
  isVip: boolean;
  creator: Types.ObjectId;
}

const announcementSchema = new Schema<IAnnouncement>(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 50,
      required: [true, "Please provide title"],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Please provide category"],
    },
    price: {
      type: Number,
      trim: true,
      min: [1, "Min price: 1"],
      max: [999999, "Max price: 999999"],
      required: [true, "Please provide price"],
    },
    image: {
      type: String,
      default: "/uploads/placeholder.png",
    },
    description: {
      type: String,
      trim: true,
      minlength: 0,
      maxlength: [600, "Max description length: 600"],
      required: [true, "Please provide description"],
    },
    location: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 60,
      required: [true, "Please provide location"],
    },
    email: {
      type: String,
      trim: true,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please add a valid email address.",
      ],
      required: [true, "Please provide email"],
    },
    phoneNumber: {
      type: String,
      trim: true,
      minlength: 10,
      maxlength: 13,
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
