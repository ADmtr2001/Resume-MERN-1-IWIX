import { Schema, model } from "mongoose";

export interface ICategory {
  name: string;
  image: string;
  imageId: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, "Please provide category name"],
    },
    image: {
      type: String,
      required: [true, "Please provide category image"],
    },
    imageId: {
      type: String,
      required: [true, "Please provide category image id"],
    },
  },
  { timestamps: true }
);

const Category = model<ICategory>("Category", categorySchema);

export default Category;
