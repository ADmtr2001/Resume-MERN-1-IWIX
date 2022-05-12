import "dotenv/config";
import "express-async-errors";

import express from "express";

import { connectDB } from "./db/connect";
import { errorHandlerMiddleware, notFoundMiddleware } from "./middleware";

import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import helmet from "helmet";
import cors from "cors";

import {
  announcementRouter,
  categoryRouter,
  commentRouter,
  userRouter,
} from "./routes";

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(helmet({}));

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/announcement", announcementRouter);
app.use("/api/v1/category", categoryRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
