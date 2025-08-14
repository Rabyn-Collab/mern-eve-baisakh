import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../app/apiUrl.js';




export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),


  endpoints: (builder) => ({

    updateUser: builder.mutation({
      query: (query) => ({
        url: '/users/update',
        body: query.data,
        headers: {
          Authorization: query.token
        },
        method: 'PATCH',
      })

    }),

    loginUser: builder.mutation({
      query: (data) => ({
        url: '/users/login',
        body: data,
        method: 'POST',
      })

    }),

    registerUser: builder.mutation({
      query: (data) => ({
        url: '/users/register',
        body: data,
        method: 'POST',
      })

    }),



  })


});

export const { useLoginUserMutation, useRegisterUserMutation, useUpdateUserMutation } = authApi;
