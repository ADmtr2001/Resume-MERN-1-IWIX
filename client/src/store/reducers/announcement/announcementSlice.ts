import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnnouncement } from "../../../types";
import {
  createAsyncAnnouncement,
  fetchAsyncAnnouncements,
} from "./announcementActionCreators";

interface AnnouncementState {
  announcements: IAnnouncement[];
}

const initialState: AnnouncementState = {
  announcements: [],
};

export const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncAnnouncements.fulfilled.type]: (
      state,
      action: PayloadAction<IAnnouncement[]>
    ) => {
      state.announcements = action.payload;
    },
    [createAsyncAnnouncement.fulfilled.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      console.log("Created");
    },
  },
});
