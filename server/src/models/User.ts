import { Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
  _id: Types.ObjectId;
  email: string;
  password: string;
  name: string;
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
    name: {
      type: String,
      required: [true, "Please provide name"],
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

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = model<IUser>("User", userSchema);

export default User;
