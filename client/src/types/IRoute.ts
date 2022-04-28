export enum RoutesNames {
  HOME = "/",
  ADMIN = "/admin",
  AUTH = "/auth",
  CREATION = "/creation",
  USER = "/user",
  ANNOUNCEMENT = "/announcement/:id",
  CATEGORY_ANNOUNCEMENTS = '/category-announcements',
  NOT_FOUND = "*",
}

export interface IRoute {
  path: RoutesNames;
  element: React.ComponentType;
}
