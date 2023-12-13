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
    removeFromCart: (state, action) => {
      const itemTotalQuantity = state.items[action.payload].quantity;

      if (state.items[action.payload]) {
        delete state.items[action.payload];
      }

      state.totalItems -= itemTotalQuantity;
    },
    addQuantityFromItem: (state, action) => {
      state.items[action.payload].quantity += 1;

      state.totalItems += 1;
    },
    removeQuantityFromItem: (state, action) => {
      const cartItem = state.items[action.payload];
      const itemTotalQuantity = cartItem.quantity;

      if (cartItem.quantity === 1) {
        cartSlice.caseReducers.removeFromCart(state, {
          payload: cartItem.id,
          type: "",
        });
      } else {
        cartItem.quantity -= 1;
      }

      if (itemTotalQuantity === 1) {
        state.totalItems = 0;
      } else {
        state.totalItems -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  addQuantityFromItem,
  removeQuantityFromItem,
} = cartSlice.actions;

export default cartSlice.reducer;