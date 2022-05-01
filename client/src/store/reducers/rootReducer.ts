import { combineReducers } from "@reduxjs/toolkit";
import { announcementSlice } from "./announcement/announcementSlice";
import { userSlice } from "./user/userSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  announcement: announcementSlice.reducer,
});
