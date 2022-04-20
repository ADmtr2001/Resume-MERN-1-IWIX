import { Schema, model } from "mongoose";

interface IUser {
  email: string;
  password: string;
  role: "user" | "admin";
  numOfComments: number;
  averageRating: number;
  isActivated: boolean;
  activationLink: string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, "Please provide rating"],
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
    numOfComments: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
    activationLink: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
