import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // darkMode: false,
  darkMode: localStorage.getItem("theme") === "dark" ? true : false,
};

export const darkSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDark: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("theme", state.darkMode ? "dark" : "light");

      if (state.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

export const { setDark } = darkSlice.actions;
export default darkSlice.reducer;
