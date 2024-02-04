// productDetailsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productTypes: [],
  productQualities: [],
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductTypes: (state, action) => {
      state.productTypes = action.payload;
    },
    setProductQualities: (state, action) => {
      state.productQualities = action.payload;
    },
  },
});

export const { setProductTypes, setProductQualities } =
  productDetailsSlice.actions;

// Selectors
export const selectProductTypes = (state) => state.productDetails.productTypes;
export const selectProductQualities = (state) =>
  state.productDetails.productQualities;

export default productDetailsSlice.reducer;
