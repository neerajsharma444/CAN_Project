import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../apiEndpoints/endPoints';

export const apiClient = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: 'include',
    reducerPath: 'apiClient',
    prepareHeaders: async (headers, {getState, endpoint}) => {
      const token = getState().auth.user?.Token;
      const id = getState().auth.user?.result?._id;
      // console.log('userToken===>>>>', token);
      // console.log('userID===>>>>', id);
      if (token) {
        headers.set('Authorization', token);
        headers.set('user_mandate', id);
        // headers.set('Content-Type', 'application/json');
      } else {
        // headers.set('Content-Type', 'application/json');
      }
      return headers;
    },
  }),
  endpoints: builder => ({}),
});
