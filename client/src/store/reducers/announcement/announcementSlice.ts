import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAnnouncementsResponse, IAnnouncement, IUser } from "../../../types";
import {
  asyncCreateAnnouncement,
  asyncFetchAnnouncements,
  asyncGetSingleAnnouncement,
  asyncGetUserAnnouncements,
  asyncGetVipAnnouncements,
  asyncUpdateAnnouncement,
} from "./announcementActionCreators";

interface AnnouncementState {
  announcements: IAnnouncement[];
  isAnnouncementsLoading: boolean;
  currentAnnouncement: IAnnouncement | null;
  isCurrentAnnouncementLoading: boolean;
  currentUserAnnouncements: IAnnouncement[];
  isCurrentUserAnnouncementsLoading: boolean;
  vipAnnouncements: IAnnouncement[];
  isVipAnnouncementsLoading: boolean;
  createdAnnouncement: IAnnouncement | null;
  isAnnouncementCreating: boolean;
  updatedAnnouncement: IAnnouncement | null;
  isAnnouncementUpdating: boolean;
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
  vipAnnouncements: [],
  isVipAnnouncementsLoading: false,
  createdAnnouncement: null,
  isAnnouncementCreating: false,
  updatedAnnouncement: null,
  isAnnouncementUpdating: false,
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
    deleteAnnouncement(state, action: PayloadAction<string>) {
      state.announcements = state.announcements.filter(
        (announcement) => announcement._id !== action.payload
      );
    },
    updateAnnouncement(state, action: PayloadAction<IAnnouncement>) {
      state.announcements = state.announcements.map((announcement) =>
        announcement._id === action.payload._id ? action.payload : announcement
      );
    },
    clearUpdatedAndCreatedAnnouncement(state) {
      state.createdAnnouncement = null;
      state.updatedAnnouncement = null;
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
      state.createdAnnouncement = null;
    },
    [asyncCreateAnnouncement.fulfilled.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      state.isAnnouncementCreating = false;
      state.createdAnnouncement = action.payload;
    },
    [asyncCreateAnnouncement.rejected.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      state.isAnnouncementCreating = false;
      state.createdAnnouncement = null;
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
    [asyncGetVipAnnouncements.pending.type]: (state) => {
      state.isVipAnnouncementsLoading = true;
    },
    [asyncGetVipAnnouncements.fulfilled.type]: (
      state,
      action: PayloadAction<IAnnouncement[]>
    ) => {
      state.vipAnnouncements = action.payload;
      state.isVipAnnouncementsLoading = false;
    },
    [asyncGetVipAnnouncements.rejected.type]: (state) => {
      state.isVipAnnouncementsLoading = false;
    },
    [asyncUpdateAnnouncement.pending.type]: (state) => {
      state.isAnnouncementUpdating = true;
      state.updatedAnnouncement = null;
    },
    [asyncUpdateAnnouncement.fulfilled.type]: (
      state,
      action: PayloadAction<IAnnouncement>
    ) => {
      state.isAnnouncementUpdating = false;
      state.updatedAnnouncement = action.payload;
    },
    [asyncUpdateAnnouncement.rejected.type]: (state) => {
      state.isAnnouncementUpdating = false;
      state.updatedAnnouncement = null;
    },
  },
});

export const {
  clearAnnouncements,
  clearCurrentAnnouncement,
  setCurrentPage,
  deleteAnnouncement,
  updateAnnouncement,
  clearUpdatedAndCreatedAnnouncement,
} = announcementSlice.actions;
