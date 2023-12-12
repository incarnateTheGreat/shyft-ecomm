import { createSlice } from "@reduxjs/toolkit";

import ProductList from "../components/ProductList";

export interface ItemsState {
  items: {
    [key: string]: ProductList & {
      quantity: number;
    };
  };
  totalItems: number;
}

const initialState: ItemsState = {
  items: {},
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.items[action.payload.id]) {
        state.items[action.payload.id] = action.payload;
        state.items[action.payload.id].quantity = 1;
      } else {
        state.items[action.payload.id].quantity += 1;
      }

      state.totalItems += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
