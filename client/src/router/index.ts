import {
  AnnouncementPage,
  AuthPage,
  CreationPage,
  HomePage,
  UserPage,
  CategoryAnnouncementsPage,
} from "../pages";

import { IRoute } from "../types";
import { RoutesNames } from "../types/IRoute";

export const publicRoutes: IRoute[] = [
  { path: RoutesNames.HOME, element: HomePage },
  { path: RoutesNames.ANNOUNCEMENT, element: AnnouncementPage },
  { path: RoutesNames.AUTH, element: AuthPage },
  {
    path: RoutesNames.ANNOUNCEMENTS,
    element: CategoryAnnouncementsPage,
  },
];

export const privateRoutes: IRoute[] = [
  { path: RoutesNames.HOME, element: HomePage },
  { path: RoutesNames.ANNOUNCEMENT, element: AnnouncementPage },
  { path: RoutesNames.USER, element: UserPage },
  { path: RoutesNames.CREATION, element: CreationPage },
  { path: RoutesNames.UPDATE, element: CreationPage },
  {
    path: RoutesNames.ANNOUNCEMENTS,
    element: CategoryAnnouncementsPage,
  },
];
