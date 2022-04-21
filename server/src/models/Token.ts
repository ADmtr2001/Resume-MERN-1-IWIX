import { Schema, model, Types } from "mongoose";

interface IToken {
  user: Types.ObjectId;
  refreshToken: string;
}

const tokenSchema = new Schema<IToken>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    refreshToken: {
      type: String,
      required: [true, "Please provide refreshToken"],
    },
  },
  { timestamps: true }
);

const Token = model<IToken>("Token", tokenSchema);

export default Token;
