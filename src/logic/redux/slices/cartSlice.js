import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    setCart: () => {},
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
