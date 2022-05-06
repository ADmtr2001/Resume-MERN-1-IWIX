import fs from "fs";
import path from "path";
import { BadRequestError } from "../errors";
import { FolderType } from "../types/local";

const deleteFileFromLocalFolder = (fileName: string) => {
  const filePath = path.resolve(__dirname, "..", "public", fileName.slice(1));

  fs.unlink(filePath, (error) => {
    if (error) {
      throw new BadRequestError(
        `Something went wrong while deleting file: ${error.message}`
      );
    }
  });
};

export default deleteFileFromLocalFolder;
