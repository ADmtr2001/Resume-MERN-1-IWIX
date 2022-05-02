import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../../http";
import { ICategory } from "../../../types";

export const asyncFetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $host.get<ICategory[]>("/category");
      return data;
    } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue("Failed");
    }
  }
);
