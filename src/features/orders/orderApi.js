import { mainApi } from '../../app/mainApi.js';


export const orderApi = mainApi.injectEndpoints({


  endpoints: (builder) => ({

    getOrders: builder.query({
      query: (token) => ({
        url: '/orders/users',
        headers: {
          Authorization: token
        },
        method: 'GET'
      }),
      providesTags: ['Order']
    }),

    getOrderDetail: builder.query({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'GET'
      }),
      providesTags: ['Order']
    }),

    createOrder: builder.mutation({
      query: (query) => ({
        url: '/orders',
        body: query.data,
        headers: {
          Authorization: query.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['Order']
    })



  })


});

export const { useCreateOrderMutation, useGetOrdersQuery, useGetOrderDetailQuery } = orderApi;
