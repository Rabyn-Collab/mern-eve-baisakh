import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi.js";

export const store = configureStore({

  reducer: {
    [authApi.reducerPath]: authApi.reducer
  },

  // caching /polling /invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware
    ]),


})

