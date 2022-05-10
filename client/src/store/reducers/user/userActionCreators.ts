import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { $authHost, $host } from "../../../http";
import {
  IAuthResponse,
  ILoginData,
  IRegisterData,
  IUser,
} from "../../../types";

export const asyncRegister = createAsyncThunk(
  "user/register",
  async (registerData: IRegisterData, { rejectWithValue }) => {
    try {
      const { data } = await $host.post<IAuthResponse>(
        "/user/register",
        registerData,
        { withCredentials: true }
      );
      console.log(data);
      localStorage.setItem("token", data.accessToken);
      return data.user;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const asyncLogin = createAsyncThunk(
  "user/login",
  async (loginData: ILoginData, { rejectWithValue }) => {
    try {
      const { data } = await $host.post<IAuthResponse>(
        "/user/login",
        loginData,
        { withCredentials: true }
      );
      localStorage.setItem("token", data.accessToken);
      return data.user;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const asyncLogout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await $host.post("/user/logout", _, {
        withCredentials: true,
      });
      localStorage.removeItem("token");
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue("Failed");
    }
  }
);

export const asyncCheckAuth = createAsyncThunk(
  "user/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $host.get<IAuthResponse>("/user/refresh", {
        withCredentials: true,
      });
      localStorage.setItem("token", data.accessToken);
      return data.user;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue("Failed");
    }
  }
);

export const asyncGetSingleUser = createAsyncThunk(
  "user/getSingleUser",
  async (userId: string, { rejectWithValue }) => {
    try {
      const { data } = await $host.get<IUser>(`/user/${userId}`);
      return data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue("Failed");
    }
  }
);
