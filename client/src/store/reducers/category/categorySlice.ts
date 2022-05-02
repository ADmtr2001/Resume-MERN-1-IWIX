import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../../types";
import { asyncFetchCategories } from "./categoryActionCreators";

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
    [asyncFetchCategories.pending.type]: (
      state,
      action: PayloadAction<ICategory[]>
    ) => {
      state.isCategoriesLoading = true;
    },
    [asyncFetchCategories.fulfilled.type]: (
      state,
      action: PayloadAction<ICategory[]>
    ) => {
      state.categories = action.payload;
      state.isCategoriesLoading = false;
    },
    [asyncFetchCategories.rejected.type]: (
      state,
      action: PayloadAction<ICategory[]>
    ) => {
      state.isCategoriesLoading = false;
    },
  },
});
