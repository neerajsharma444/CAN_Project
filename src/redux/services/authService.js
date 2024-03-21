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
    getCalendarEvents: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.CALENDAR_EVENTS,
        body: body,
        method: 'POST',
      }),
    }),
    addReferral: builder.mutation({
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
  useLazyFetchEventsQuery,
  useGetCalendarEventsMutation,
  useAddReferralMutation,
  useLazyReferralListQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = authService;
