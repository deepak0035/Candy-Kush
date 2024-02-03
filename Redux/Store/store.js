import { configureStore } from "@reduxjs/toolkit";
import productDetailsSlice from "../Slices/productDetailsSlice";

export const store = configureStore({
  reducer: {
    productDetails: productDetailsSlice,
  },
});
