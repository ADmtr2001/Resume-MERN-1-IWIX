import { Types } from "mongoose";
import { IUser } from "../models/User";

class UserDto {
  name: string;
  email: string;
  _id: Types.ObjectId;
  isActivated: boolean;
  role: string;

  constructor(model: IUser) {
    this.name = model.name;
    this.email = model.email;
    this._id = model._id;
    this.isActivated = model.isActivated;
    this.role = model.role;
  }
}

export default UserDto;
