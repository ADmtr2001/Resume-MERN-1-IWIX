import fs from "fs";
import { BadRequestError } from "../errors";

export async function deleteFile(path: string) {
  fs.unlink(path, (error) => {
    if (error) {
      throw new BadRequestError(
        `Something went wrong while deleting file: ${error.message}`
      );
    }
  });
}
