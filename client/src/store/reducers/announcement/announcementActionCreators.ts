import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "../../../http";
import { GetAnnouncementsResponse, IAnnouncement } from "../../../types";

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
