import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "../features/articles/articlesApi";


// const per = {
//   name: 'ram',
//   age: 90
// };

// const s = {
//   [per.name]: 'ram'
// };

export const store = configureStore({

  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer
  },

  // caching /polling /invalidation
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      articlesApi.middleware
    ]),


})

