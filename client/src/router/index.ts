import {
  AdminPage,
  AnnouncementPage,
  AuthPage,
  CreationPage,
  HomePage,
  NotFoundPage,
  UserPage,
  CategoryAnnouncementsPage,
} from "../pages";

import { IRoute, RoutesNames } from "../types/IRoute";

export const publicRoutes: IRoute[] = [
  { path: RoutesNames.HOME, element: HomePage },
  { path: RoutesNames.ANNOUNCEMENT, element: AnnouncementPage },
  { path: RoutesNames.AUTH, element: AuthPage },
  { path: RoutesNames.NOT_FOUND, element: NotFoundPage },
  {
    path: RoutesNames.CATEGORY_ANNOUNCEMENTS,
    element: CategoryAnnouncementsPage,
  },
];

export const privateRoutes: IRoute[] = [
  { path: RoutesNames.HOME, element: HomePage },
  { path: RoutesNames.ANNOUNCEMENT, element: AnnouncementPage },
  { path: RoutesNames.USER, element: UserPage },
  { path: RoutesNames.ADMIN, element: AdminPage },
  { path: RoutesNames.CREATION, element: CreationPage },
  { path: RoutesNames.NOT_FOUND, element: NotFoundPage },
];
