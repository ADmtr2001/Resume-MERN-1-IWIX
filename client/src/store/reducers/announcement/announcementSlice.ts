import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAnnouncementsResponse, IAnnouncement, IUser } from "../../../types";
import {
  asyncCreateAnnouncement,
  asyncFetchAnnouncements,
  asyncGetSingleAnnouncement,
  asyncGetUserAnnouncements,
} from "./announcementActionCreators";

interface AnnouncementState {
  announcements: IAnnouncement[];
  isAnnouncementsLoading: boolean;
  currentAnnouncement: IAnnouncement | null;
  isCurrentAnnouncementLoading: boolean;
  currentUserAnnouncements: IAnnouncement[];
  isCurrentUserAnnouncementsLoading: boolean;
  isAnnouncementCreating: boolean;
  currentPage: number;
  numberOfPages: number;
}

const initialState: AnnouncementState = {
  announcements: [],
  isAnnouncementsLoading: false,
  currentAnnouncement: null,
  isCurrentAnnouncementLoading: false,
  currentUserAnnouncements: [],
  isCurrentUserAnnouncementsLoading: false,
  isAnnouncementCreating: false,
  currentPage: 0,
  numberOfPages: 0,
};

export const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {
    clearAnnouncements(state) {
      state.announcements = [];
      state.currentPage = 0;
      state.numberOfPages = 0;
    },
    clearCurrentAnnouncement(state) {
      state.currentAnnouncement = null;
      state.currentUserAnnouncements = [];
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
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
    [asyncCreateAnnouncement.pending.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      state.isAnnouncementCreating = true;
    },
    [asyncCreateAnnouncement.fulfilled.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      state.isAnnouncementCreating = false;
    },
    [asyncCreateAnnouncement.rejected.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      state.isAnnouncementCreating = false;
    },
    [asyncGetSingleAnnouncement.pending.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      state.isCurrentAnnouncementLoading = true;
    },
    [asyncGetSingleAnnouncement.fulfilled.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      state.currentAnnouncement = action.payload;
      state.isCurrentAnnouncementLoading = false;
    },
    [asyncGetSingleAnnouncement.rejected.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      state.isCurrentAnnouncementLoading = false;
    },
    [asyncGetUserAnnouncements.pending.type]: (
      state,
      action: PayloadAction<IAnnouncement[]>
    ) => {
      state.isCurrentUserAnnouncementsLoading = true;
    },
    [asyncGetUserAnnouncements.fulfilled.type]: (
      state,
      action: PayloadAction<IAnnouncement[]>
    ) => {
      state.currentUserAnnouncements = action.payload;
      state.isCurrentUserAnnouncementsLoading = false;
    },
    [asyncGetUserAnnouncements.rejected.type]: (
      state,
      action: PayloadAction<IAnnouncement[]>
    ) => {
      state.isCurrentUserAnnouncementsLoading = false;
    },
  },
});

export const { clearAnnouncements, clearCurrentAnnouncement, setCurrentPage } =
  announcementSlice.actions;
