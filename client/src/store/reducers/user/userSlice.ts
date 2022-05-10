import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../../types";

import {
  asyncCheckAuth,
  asyncGetSingleUser,
  asyncLogin,
  asyncLogout,
  asyncRegister,
} from "./userActionCreators";

interface UserState {
  user: IUser | null;
  isUserLoading: boolean;
  singleUser: IUser | null;
  isSingleUserLoading: boolean;
  isLogin: boolean;
  isSignup: boolean;
  loginError: string;
  signupError: string;
}

const initialState: UserState = {
  user: null,
  isUserLoading: true,
  singleUser: null,
  isSingleUserLoading: false,
  isLogin: false,
  isSignup: false,
  loginError: "",
  signupError: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [asyncRegister.pending.type]: (state) => {
      state.isSignup = true;
      state.signupError = "";
      state.loginError = "";
    },
    [asyncRegister.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isSignup = false;
      state.signupError = "";
      state.loginError = "";
    },
    [asyncRegister.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isSignup = false;
      state.signupError = action.payload;
      state.loginError = "";
    },
    [asyncLogin.pending.type]: (state) => {
      state.isLogin = true;
      state.loginError = "";
      state.signupError = "";
    },
    [asyncLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isLogin = false;
      state.loginError = "";
      state.signupError = "";
    },
    [asyncLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLogin = false;
      state.loginError = action.payload;
      state.signupError = "";
    },
    [asyncLogout.fulfilled.type]: (state) => {
      state.user = null;
    },
    [asyncCheckAuth.pending.type]: (state) => {
      state.isUserLoading = true;
    },
    [asyncCheckAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isUserLoading = false;
    },
    [asyncCheckAuth.rejected.type]: (state) => {
      state.isUserLoading = false;
    },
    [asyncGetSingleUser.pending.type]: (state) => {
      state.isSingleUserLoading = true;
    },
    [asyncGetSingleUser.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      state.singleUser = action.payload;
      state.isSingleUserLoading = false;
    },
    [asyncGetSingleUser.rejected.type]: (state) => {
      state.isSingleUserLoading = false;
    },
  },
});
