import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAnnouncementsResponse, IAnnouncement } from "../../../types";
import {
  createAsyncAnnouncement,
  fetchAsyncAnnouncements,
} from "./announcementActionCreators";

interface AnnouncementState {
  announcements: IAnnouncement[];
  currentPage: number;
  numberOfPages: number;
}

const initialState: AnnouncementState = {
  announcements: [],
  currentPage: 0,
  numberOfPages: 0,
};

export const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncAnnouncements.fulfilled.type]: (
      state,
      action: PayloadAction<GetAnnouncementsResponse>
    ) => {
      state.announcements = action.payload.announcements;
      state.currentPage = action.payload.currentPage;
      state.numberOfPages = action.payload.numberOfPages;
    },
    [createAsyncAnnouncement.fulfilled.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      console.log(action.payload);
    },
  },
});
