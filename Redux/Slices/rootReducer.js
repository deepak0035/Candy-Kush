// rootReducer.js
import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import totalReducer from "./totalSlice";
import productDetailsReducer from "./productDetailsSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  total: totalReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
