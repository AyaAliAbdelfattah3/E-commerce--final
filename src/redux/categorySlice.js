import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   value: "all",
  value: localStorage.getItem("selectedCategory") || "all",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    updateCategory: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("selectedCategory", action.payload);
    },
  },
});
export const { updateCategory } = categorySlice.actions;
export default categorySlice.reducer;
