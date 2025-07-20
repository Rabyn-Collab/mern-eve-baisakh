import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://687a1c05abb83744b7eb7786.mockapi.io' }),


  endpoints: (builder) => ({


    getArticles: builder.query({
      query: () => ({
        url: '/articles',
        method: 'GET'
      })
    })

  })

});


export const { useGetArticlesQuery, useLazyGetArticlesQuery } = articlesApi;