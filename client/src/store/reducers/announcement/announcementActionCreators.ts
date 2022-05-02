import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "../../../http";
import { GetAnnouncementsResponse, IAnnouncement, IUser } from "../../../types";
import { asyncGetSingleUser } from "../user/userActionCreators";

export const asyncFetchAnnouncements = createAsyncThunk(
  "announcement/fetchAnnouncements",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $host.get<GetAnnouncementsResponse>(
        "/announcement"
      );
      return data;
    } catch (error: any) {
      console.log(error.response.data.message);
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
      console.log(error.response.data.message);
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
      console.log(error.response.data.message);
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
      console.log(error.response.data.message);
      return rejectWithValue("Failed");
    }
  }
);
