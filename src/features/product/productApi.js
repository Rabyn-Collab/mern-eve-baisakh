import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../app/apiUrl.js';



export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),


  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET'
      }),
      providesTags: ['Products']
    }),

    addProduct: builder.mutation({
      // {data: {}, token: 'sd;lfksdl'}
      query: (query) => ({
        url: '/products',
        body: query.data,
        headers: {
          Authorization: query.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['Products']
    })


  })


});

export const { useGetProductsQuery, useAddProductMutation } = productApi;
