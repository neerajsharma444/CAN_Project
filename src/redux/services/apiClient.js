import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL, API_ENDPOINTS} from '../apiEndpoints/endPoints';

export const apiClient = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: 'include',
    reducerPath: 'apiClient',
    prepareHeaders: async (headers, {getState, endpoint}) => {
      // const userToken = getState().auth.user?.token;
      // console.log('userToken===>>>>', userToken);
      // if (userToken) {
      //   headers.set('Authorization', `Bearer ${userToken}`);
      //   headers.set('Content-Type', 'application/json');
      // } else {
      headers.set('Content-Type', 'application/json');
      // }
      return headers;
    },
  }),
  endpoints: builder => ({}),
});
