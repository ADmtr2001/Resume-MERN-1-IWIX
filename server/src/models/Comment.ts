import { Schema, model, Types } from "mongoose";

interface IComment {
  from: Types.ObjectId;
  to: Types.ObjectId;
  text: string;
  rating: number;
}

const commentSchema = new Schema<IComment>(
  {
    from: {
      type: Schema.Types.ObjectId,
      required: [true, "Please provide sender"],
    },
    to: {
      type: Schema.Types.ObjectId,
      required: [true, "Please provide recipient"],
    },
    text: {
      type: String,
      required: [true, "Please provide text"],
    },
    rating: {
      type: Number,
      required: [true, "Please provide rating"],
    },
  },
  { timestamps: true }
);

const Comment = model<IComment>("Comment", commentSchema);

export default Comment;
