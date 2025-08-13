import { createSlice } from "@reduxjs/toolkit";
import { clearCartFromLocal, getCartFromLocal, setCartToLocal } from "../local/local.js";


export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartFromLocal()
  },

  reducers: {

    setToCart: (state, action) => {
      const isExist = state.carts.find((cart) => cart.id === action.payload.id);

      if (isExist) {
        state.carts = state.carts.map((cart) => cart.id === action.payload.id ? action.payload : cart);

      } else {
        state.carts.push(action.payload);

      }

      setCartToLocal(state.carts);

    },

    removeFromCart: (state, action) => {
      state.carts.splice(action.payload, 1);
      setCartToLocal(state.carts);

    },

    clearCart: (state, action) => {
      state.carts = [];
      clearCartFromLocal();

    },

  }

});

export const { setToCart, removeFromCart, clearCart } = cartSlice.actions;