import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({

  reducer: {

  },

  // caching /polling /invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([

    ]),


})

