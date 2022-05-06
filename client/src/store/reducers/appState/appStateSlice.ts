import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  isGridView: boolean;
  isDeleteModalVisible: boolean;
  announcementToDelete: string | null;
}

const initialState: AppState = {
  isGridView: true,
  isDeleteModalVisible: false,
  announcementToDelete: null,
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setIsGridView(state, action: PayloadAction<boolean>) {
      state.isGridView = action.payload;
      localStorage.setItem("isGridView", `${action.payload}`);
    },
    setDeleteModal(
      state,
      action: PayloadAction<{ visible: boolean; announcement: string | null }>
    ) {
      state.isDeleteModalVisible = action.payload.visible;
      state.announcementToDelete = action.payload.announcement;
    },
  },
});

export const { setIsGridView, setDeleteModal } = appStateSlice.actions;
