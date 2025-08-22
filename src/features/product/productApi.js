import { mainApi } from "../../app/mainApi.js";

export const productApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({

    getTop5Products: builder.query({
      query: () => ({
        url: '/products/top-5',
        method: 'GET'
      }),
      providesTags: ['Products']
    }),

    getProducts: builder.query({
      query: (q) => ({
        url: '/products',
        params: q,
        method: 'GET'
      }),
      providesTags: ['Products']
    }),

    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET'
      }),
      providesTags: ['Products']

    }),

    addProduct: builder.mutation({
      query: (query) => ({
        url: '/products',
        body: query.data,
        headers: {
          Authorization: query.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['Products']
    }),


    updateProduct: builder.mutation({
      query: (query) => ({
        url: `/products/${query.id}`,
        body: query.data,
        headers: {
          Authorization: query.token
        },
        method: 'PATCH'
      }),
      invalidatesTags: ['Products']
    }),


    removeProduct: builder.mutation({
      query: (query) => ({
        url: `/products/${query.id}`,
        headers: {
          Authorization: query.token
        },
        method: 'DELETE'
      }),
      invalidatesTags: ['Products']
    }),

    reviewAdd: builder.mutation({
      query: (query) => ({
        url: `/products/review/${query.id}`,
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

export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation, useRemoveProductMutation, useUpdateProductMutation, useGetTop5ProductsQuery, useReviewAddMutation } = productApi;
