import path from "path";
import { v4 as uuidv4 } from "uuid";
import { FolderType } from "../types/local";

const moveFileToLocalFolder = (image: any, folderName: FolderType) => {
  const fileName = uuidv4() + ".jpg";
  const filePath = path.resolve(
    __dirname,
    "..",
    "public",
    "uploads",
    folderName,
    fileName
  );
  // @ts-ignore
  image.mv(filePath);

  return fileName;
};

export default moveFileToLocalFolder;
