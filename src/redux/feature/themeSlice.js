import { createSlice } from "@reduxjs/toolkit";
import { lightTheme } from "../../components/theme";
export const ThemeColor = createSlice({
  name: "theme",
  initialState: { data: lightTheme },
  reducers: {
    changeTheme: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { changeTheme } = ThemeColor.actions;
