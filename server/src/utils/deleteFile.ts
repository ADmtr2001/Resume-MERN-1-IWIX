import fs from "fs";
import { BadRequestError } from "../errors";

const deleteFile =  async (path: string) => {
  fs.unlink(path, (error) => {
    if (error) {
      throw new BadRequestError(
        `Something went wrong while deleting file: ${error.message}`
      );
    }
  });
}

export default deleteFile;