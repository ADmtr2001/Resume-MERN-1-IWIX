import { createAsyncThunk } from "@reduxjs/toolkit";

import { $authHost, $host } from "../../../http";

import { asyncGetSingleUser } from "../user/userActionCreators";
import { deleteAnnouncement, updateAnnouncement } from "./announcementSlice";

import { GetAnnouncementsResponse, IAnnouncement } from "../../../types";

export const asyncGetAnnouncements = createAsyncThunk(
  "announcement/fetchAnnouncements",
  async (searchParams: string, { rejectWithValue }) => {
    try {
      const { data } = await $host.get<GetAnnouncementsResponse>(
        `/announcement${searchParams}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue("Failed");
    }
  }
);

export const asyncCreateAnnouncement = createAsyncThunk(
  "announcement/createAnnouncement",
  async (announcementData: FormData, { rejectWithValue }) => {
    try {
      const { data } = await $authHost.post<IAnnouncement>(
        "/announcement",
        announcementData
      );
      return data;
    } catch (error: any) {
      return rejectWithValue("Failed");
    }
  }
);

export const asyncGetSingleAnnouncement = createAsyncThunk(
  "announcement/getSingleAnnouncement",
  async (announcementId: string, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await $host.get<IAnnouncement>(
        `/announcement/${announcementId}`
      );
      dispatch(asyncGetSingleUser(data.creator));
      dispatch(asyncGetUserAnnouncements(data.creator));
      return data;
    } catch (error: any) {
      return rejectWithValue("Failed");
    }
  }
);

export const asyncGetUserAnnouncements = createAsyncThunk(
  "announcement/getUserAnnouncements",
  async (userId: string, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await $host.get<IAnnouncement[]>(
        `announcement/user/${userId}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue("Failed");
    }
  }
);

export const asyncGetVipAnnouncements = createAsyncThunk(
  "announcement/getVipAnnouncements",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await $host.get<IAnnouncement[]>(`announcement/vip`);
      return data;
    } catch (error: any) {
      return rejectWithValue("Failed");
    }
  }
);

export const asyncDeleteAnnouncement = createAsyncThunk(
  "announcement/deleteAnnouncement",
  async (announcementId: string, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await $authHost.delete(`announcement/${announcementId}`);
      dispatch(deleteAnnouncement(announcementId));
      return data;
    } catch (error: any) {
      return rejectWithValue("Failed");
    }
  }
);

export const asyncUpdateAnnouncement = createAsyncThunk(
  "announcement/updateAnnouncement",
  async (
    announcementData: { data: FormData; id: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { data } = await $authHost.patch<IAnnouncement>(
        `announcement/${announcementData.id}`,
        announcementData.data
      );
      dispatch(updateAnnouncement(data));
      return data;
    } catch (error: any) {
      return rejectWithValue("Failed");
    }
  }
);
