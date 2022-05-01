import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { $authHost, $host } from "../../../http";
import { IAuthResponse, ILoginData, IRegisterData } from "../../../types";

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
      console.log(error.response.data.message);
      return rejectWithValue("Failed");
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
      console.log(data.user);
      localStorage.setItem("token", data.accessToken);
      return data.user;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue("Failed");
    }
  }
);

export const asyncLogout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $host.post("/user/logout", _, {
        withCredentials: true,
      });
      console.log(data);
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
      console.log(data);
      localStorage.setItem("token", data.accessToken);
      return data.user;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue("Failed");
    }
  }
);
