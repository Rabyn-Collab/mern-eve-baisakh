import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";





export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),


  endpoints: (builder) => ({

    getAllRecipe: builder.query({
      query: () => ({
        url: '/recipes',
        method: 'GET'
      })
    }),

    getSearchRecipe: builder.query({
      query: (query) => ({
        url: '/recipes/search',
        params: {
          q: query
        },
        method: 'GET'
      })
    })



  })

});

export const { useGetAllRecipeQuery, useGetSearchRecipeQuery } = recipeApi;