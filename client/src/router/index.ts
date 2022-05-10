import {
  AnnouncementsPage,
  AuthPage,
  CreationPage,
  HomePage,
  UserPage,
  SingleAnnouncementPage,
} from "../pages";

import { IRoute } from "../types";
import { RoutesNames } from "../types/Others/IRoute";

export const publicRoutes: IRoute[] = [
  { path: RoutesNames.HOME, element: HomePage },
  {
    path: RoutesNames.ANNOUNCEMENTS,
    element: AnnouncementsPage,
  },
  { path: RoutesNames.ANNOUNCEMENT, element: SingleAnnouncementPage },
  { path: RoutesNames.AUTH, element: AuthPage },
];

export const privateRoutes: IRoute[] = [
  { path: RoutesNames.HOME, element: HomePage },
  {
    path: RoutesNames.ANNOUNCEMENTS,
    element: AnnouncementsPage,
  },
  { path: RoutesNames.ANNOUNCEMENT, element: SingleAnnouncementPage },
  { path: RoutesNames.USER, element: UserPage },
  { path: RoutesNames.CREATION, element: CreationPage },
  { path: RoutesNames.UPDATE, element: CreationPage },
];
