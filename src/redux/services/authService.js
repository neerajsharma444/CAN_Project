import {API_ENDPOINTS} from '../apiEndpoints/endPoints';
import {apiClient} from './apiClient';

export const authService = apiClient.injectEndpoints({
  endpoints: builder => ({
    fetchStates: builder.query({
      query: () => ({
        url: API_ENDPOINTS.GET_ALL_STATES,
        method: 'GET',
      }),
    }),
    signUp: builder.mutation({
      query: FormData => ({
        url: API_ENDPOINTS.REGISTER,
        body: FormData,
        method: 'POST',
      }),
    }),
    login: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.LOGIN,
        body: body,
        method: 'POST',
      }),
    }),
    resetPassword: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.RESET_PASSWORD,
        body: body,
        method: 'POST',
      }),
    }),
    updateProfile: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.UPDATE_PROFILE,
        body: body,
        method: 'PUT',
      }),
    }),
    changePassword: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.CHANGE_PASSWORD,
        body: body,
        method: 'PUT',
      }),
    }),
  }),
});

export const {
  useLazyFetchStatesQuery,
  useSignUpMutation,
  useLoginMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = authService;
