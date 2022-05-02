import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../types";
import {
  asyncCheckAuth,
  asyncLogin,
  asyncLogout,
  asyncRegister,
} from "./userActionCreators";

interface UserState {
  user: IUser | null;
  isUserLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isUserLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [asyncRegister.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    [asyncLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
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
  },
});
