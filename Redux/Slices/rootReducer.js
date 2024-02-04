// rootReducer.js
import { combineReducers } from "redux";
import productDetailsReducer from "./productDetailsSlice";
import cartSlice from "./cartSlice";
// Add other reducers as needed

export default combineReducers({
  cart: cartSlice,
  productDetails: productDetailsReducer,
});

