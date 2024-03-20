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
      query: body => ({
        url: API_ENDPOINTS.REGISTER,
        body: body,
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
    fetchEvents: builder.query({
      query: () => ({
        url: API_ENDPOINTS.CALENDAR,
        method: 'GET',
      }),
    }),
    referral: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.REFERRAL,
        body: body,
        method: 'POST',
      }),
    }),
    referralList: builder.query({
      query: id => ({
        url: `referral/list_by_mandate?user_mandate=${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLazyFetchStatesQuery,
  useSignUpMutation,
  useLoginMutation,
  useLazyFetchEventsQuery,
  useLazyReferralListQuery,
} = authService;
