export enum RoutesNames {
  HOME = "/",
  ADMIN = "/admin",
  AUTH = "/auth",
  CREATION = "/creation",
  UPDATE = "/update/:id",
  USER = "/user",
  ANNOUNCEMENT = "/announcement/:id",
  ANNOUNCEMENTS = "/announcements",
  NOT_FOUND = "*",
}

interface IRoute {
  path: RoutesNames;
  element: React.ComponentType;
}

export default IRoute;
