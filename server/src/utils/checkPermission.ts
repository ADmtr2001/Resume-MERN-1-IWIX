import { UserDto } from "../dtos";
import { UnauthorizedError } from "../errors";

const checkPermission = (requestUser: UserDto, resourceUserId: string) => {
  if (requestUser.role === "admin") return;
  if (requestUser.id.toString() === resourceUserId) return;
  throw new UnauthorizedError("You don't have access");
};

export default checkPermission;
