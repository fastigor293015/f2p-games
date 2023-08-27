import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Theme = "dark" | "light" | "system";

interface ThemeState {
  mode: Theme;
}

const initialState: ThemeState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
