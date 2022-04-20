import mongoose from "mongoose";

export const connectDB = (url: string | undefined) => {
  if (!url)
    throw new Error("Something went wrong while connection to database");

  return mongoose.connect(url);
};
