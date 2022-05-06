import path from "path";
import { v4 as uuidv4 } from "uuid";
import { FolderType } from "../types/local";

const moveFileToLocalFolder = (image: any, folderName: FolderType) => {
  const fileExtension = image.name.split(".")[1];
  const fileName = uuidv4() + `.${fileExtension}`;
  const filePath = path.resolve(
    __dirname,
    "..",
    "public",
    "uploads",
    folderName,
    fileName
  );
  console.log(filePath);
  // @ts-ignore
  image.mv(filePath);

  return `/uploads/${folderName}/${fileName}`;
};

export default moveFileToLocalFolder;
