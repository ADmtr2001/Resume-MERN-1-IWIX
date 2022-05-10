import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { asyncGetCategories } from "./categoryActionCreators";

import { ICategory } from "../../../types";

interface CategoryState {
  categories: ICategory[];
  isCategoriesLoading: boolean;
}

const initialState: CategoryState = {
  categories: [],
  isCategoriesLoading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [asyncGetCategories.pending.type]: (state) => {
      state.isCategoriesLoading = true;
    },
    [asyncGetCategories.fulfilled.type]: (
      state,
      action: PayloadAction<ICategory[]>
    ) => {
      state.categories = action.payload;
      state.isCategoriesLoading = false;
    },
    [asyncGetCategories.rejected.type]: (state) => {
      state.isCategoriesLoading = false;
    },
  },
});
