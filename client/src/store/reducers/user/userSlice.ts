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
}

const initialState: UserState = {
  user: null,
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
      console.log(action.payload);
      state.user = action.payload;
    },
    [asyncLogout.fulfilled.type]: (state) => {
      state.user = null;
    },
    [asyncCheckAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});
