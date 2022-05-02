import { combineReducers } from "@reduxjs/toolkit";
import { announcementSlice } from "./announcement/announcementSlice";
import { categorySlice } from "./category/categorySlice";
import { userSlice } from "./user/userSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  announcement: announcementSlice.reducer,
  category: categorySlice.reducer,
});
