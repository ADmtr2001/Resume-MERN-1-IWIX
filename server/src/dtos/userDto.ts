import { Types } from "mongoose";
import { IUser } from "../models/User";

class UserDto {
  email: string;
  id: Types.ObjectId;
  isActivated: boolean;
  role: string;

  constructor(model: IUser) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.role = model.role;
  }
}

export default UserDto;
