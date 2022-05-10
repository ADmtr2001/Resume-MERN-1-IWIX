export enum RoutesNames {
  HOME = "/",
  AUTH = "/auth",
  CREATION = "/creation",
  UPDATE = "/update/:id",
  USER = "/user",
  ANNOUNCEMENT = "/announcement/:id",
  ANNOUNCEMENTS = "/announcements",
}

interface IRoute {
  path: RoutesNames;
  element: React.ComponentType;
}

export default IRoute;
