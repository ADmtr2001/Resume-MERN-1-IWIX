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
  currentUser: IUser | null;
  isCurrentUserLoading: boolean;
  isLogin: boolean;
}

const initialState: UserState = {
  user: null,
  isUserLoading: true,
  currentUser: null,
  isCurrentUserLoading: true,
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [asyncRegister.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    [asyncLogin.pending.type]: (state) => {
      state.isLogin = true;
    },
    [asyncLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    [asyncLogin.rejected.type]: (state) => {
      state.isLogin = false;
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
      state.isCurrentUserLoading = true;
    },
    [asyncGetSingleUser.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      state.currentUser = action.payload;
      state.isCurrentUserLoading = false;
    },
    [asyncGetSingleUser.rejected.type]: (state) => {
      state.isCurrentUserLoading = false;
    },
  },
});
