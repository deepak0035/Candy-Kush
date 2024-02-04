// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  checkoutBucket: [],
  productName: '',
  productType: '',
  productQuality: '',
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
    setProductType: (state, action) => {
      state.productType = action.payload;
    },
    setProductQuality: (state, action) => {
      state.productQuality = action.payload;
    },
    incrementQuantity: (state, action) => {
      const productIndex = state.items.findIndex(
        (item) => item.productId === action.payload
      );
      if (productIndex !== -1) {
        state.items[productIndex].productQuantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productIndex = state.items.findIndex(
        (item) => item.productId === action.payload
      );
      if (productIndex !== -1) {
        state.items[productIndex].productQuantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.productId === action.payload
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}), because it's not available`
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, setProductName, setProductType, setProductQuality, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Selector
export const selectCartItems = (state) => state.cart.items;
export const selectProductName = (state) => state.cart.productName;
export const selectProductType = (state) => state.cart.productType;
export const selectedProductQuality = (state) => state.cart.productQuality;
export const selectTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.productPrice, 0);



export default cartSlice.reducer;
