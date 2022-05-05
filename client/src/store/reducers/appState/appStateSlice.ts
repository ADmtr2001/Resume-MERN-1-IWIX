import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isGridView: boolean;
}

const initialState: AppState = {
  isGridView: true,
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setIsGridView(state, action: PayloadAction<boolean>) {
      state.isGridView = action.payload;
      localStorage.setItem("isGridView", `${action.payload}`);
    },
  },
});

export const { setIsGridView } = appStateSlice.actions;