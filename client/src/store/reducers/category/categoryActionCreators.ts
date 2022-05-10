import { createAsyncThunk } from "@reduxjs/toolkit";

import { $host } from "../../../http";

import { ICategory } from "../../../types";

export const asyncGetCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $host.get<ICategory[]>("/category");
      return data;
    } catch (error: any) {
      return rejectWithValue("Failed");
    }
  }
);
