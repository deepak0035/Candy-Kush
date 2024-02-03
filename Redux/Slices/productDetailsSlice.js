// productDetailsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productName: "",
  selectedType: [],
  selectedQuality: [],
  productImages: [],
  typeImages: [],
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
    setProductImages: (state, action) => {
      state.productImages = action.payload;
    },
    setSelectedQuality: (state, action) => {
      state.selectedQuality = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
});

export const {
  setProductName,
  setSelectedType,
  setProductImages,
  setSelectedQuality,
} = productDetailsSlice.actions;

// Selectors
export const selectProductName = (state) => state.productDetails?.productName;
export const selectProductImages = (state) => state.productDetails?.productImages;
export const selectedQuality = (state) => state.productDetails?.selectedQuality;

export const selectSelectedType = (state) => state.productDetails?.selectedType;

export default productDetailsSlice.reducer;
