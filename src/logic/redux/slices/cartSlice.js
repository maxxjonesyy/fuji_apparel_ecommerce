import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartState: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cartState = [action.payload, ...state.cartState];
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
