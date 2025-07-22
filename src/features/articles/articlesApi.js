import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://687a1c05abb83744b7eb7786.mockapi.io' }),


  endpoints: (builder) => ({


    getArticles: builder.query({
      query: () => ({
        url: '/articles',
        method: 'GET'
      }),
      providesTags: ['Articles']
    }),

    getArticle: builder.query({
      query: (id) => ({
        url: `/articles/${id}`,
        method: 'GET'
      }),
      providesTags: ['Articles']
    }),

    addArticle: builder.mutation({
      query: (data) => ({
        url: '/articles',
        body: data,
        method: 'POST'
      }),
      invalidatesTags: ['Articles']

    }),

    updateArticle: builder.mutation({
      query: (query) => ({
        url: `/articles/${query.id}`,
        body: query.data,
        method: 'PATCH'
      }),
      invalidatesTags: ['Articles']
    }),

    removeArticle: builder.mutation({
      query: (id) => ({
        url: `/articles/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Articles']
    })



  })

});


export const { useGetArticlesQuery, useAddArticleMutation, useLazyGetArticlesQuery, useRemoveArticleMutation, useGetArticleQuery, useUpdateArticleMutation } = articlesApi;