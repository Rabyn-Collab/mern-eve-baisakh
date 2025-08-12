import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../app/apiUrl.js';


export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({

    createOrder: builder.mutation({
      query: (query) => ({
        url: '/orders',
        body: query.data,
        headers: {
          Authorization: query.token
        },
        method: 'POST'
      })
    })



  })


});

export const { useCreateOrderMutation } = orderApi;
