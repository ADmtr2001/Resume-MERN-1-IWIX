import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAnnouncementsResponse, IAnnouncement, IUser } from "../../../types";
import {
  asyncCreateAnnouncement,
  asyncFetchAnnouncements,
  asyncGetSingleAnnouncement,
} from "./announcementActionCreators";

interface AnnouncementState {
  announcements: IAnnouncement[];
  isAnnouncementsLoading: boolean;
  currentAnnouncement: IAnnouncement | null;
  currentAnnouncementUser: IUser | null;
  currentPage: number;
  numberOfPages: number;
}

const initialState: AnnouncementState = {
  announcements: [],
  isAnnouncementsLoading: false,
  currentAnnouncement: null,
  currentAnnouncementUser: null,
  currentPage: 0,
  numberOfPages: 0,
};

export const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {},
  extraReducers: {
    [asyncFetchAnnouncements.pending.type]: (state) => {
      state.isAnnouncementsLoading = true;
    },
    [asyncFetchAnnouncements.fulfilled.type]: (
      state,
      action: PayloadAction<GetAnnouncementsResponse>
    ) => {
      state.announcements = action.payload.announcements;
      state.currentPage = action.payload.currentPage;
      state.numberOfPages = action.payload.numberOfPages;
      state.isAnnouncementsLoading = false;
    },
    [asyncFetchAnnouncements.rejected.type]: (state) => {
      state.isAnnouncementsLoading = false;
    },
    [asyncCreateAnnouncement.fulfilled.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      console.log(action.payload);
    },
    [asyncGetSingleAnnouncement.fulfilled.type]: (
      state,
      action: PayloadAction<{ announcement: IAnnouncement; user: IUser }>
    ) => {
      console.log(action.payload);
      state.currentAnnouncement = action.payload.announcement;
      state.currentAnnouncementUser = action.payload.user;
    },
  },
});
