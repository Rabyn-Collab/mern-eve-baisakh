import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi.js";
import { userSlice } from "../features/user/userSlice.js";
import { productApi } from "../features/product/productApi.js";
import { cartSlice } from "../features/carts/cartSlice.js";
import { orderApi } from "../features/orders/orderApi.js";

export const store = configureStore({

  reducer: {
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer
  },

  // caching /polling /invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      productApi.middleware,
      orderApi.middleware
    ]),


})

