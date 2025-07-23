import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "../features/recipe/recipeApi";

export const store = configureStore({

  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer
  },

  // caching /polling /invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      recipeApi.middleware
    ]),


})

