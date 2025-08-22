import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/user/userSlice.js";
import { cartSlice } from "../features/carts/cartSlice.js";
import { mainApi } from "./mainApi.js";

export const store = configureStore({

  reducer: {
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [mainApi.reducerPath]: mainApi.reducer

  },

  // caching /polling /invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      mainApi.middleware
    ]),


})

