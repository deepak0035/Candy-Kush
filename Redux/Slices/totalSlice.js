// totalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
};

export const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setTotal } = totalSlice.actions;

// Selector
export const selectTotalAmount = (state) => state.total.total;

export default totalSlice.reducer;
