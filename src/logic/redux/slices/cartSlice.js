import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartState: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cartState = [action.payload, ...state.cartState];
    },
    clearCart: (state, action) => {
      state.cartState = action.payload;
    },
    removeItem: (state, action) => {
      state.cartState = action.payload;
    },
  },
});

export const { setCart, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
