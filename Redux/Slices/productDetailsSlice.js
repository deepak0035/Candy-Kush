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
    clearProductDetails: (state) => {
      // Reset the product details state to its initial values
      state.productTypes = [];
      state.productQualities = [];
    },
  },
});

export const {
  setProductTypes,
  setProductQualities,
  clearProductDetails, // New action to clear the product details
} = productDetailsSlice.actions;

// Selectors
export const selectProductTypes = (state) => state.productDetails.productTypes;
export const selectProductQualities = (state) =>
  state.productDetails.productQualities;

export default productDetailsSlice.reducer;
