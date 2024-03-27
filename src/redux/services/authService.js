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
        url: API_ENDPOINTS.ADD_REFERRAL,
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
    updatePassword: builder.mutation({
      query: body => ({
        url: `update-password`,
        body: body,
        method: 'PUT',
      }),
    }),
    forumCategories: builder.query({
      query: () => ({
        url: API_ENDPOINTS.FORUM_CATEGORY,
        method: 'GET',
      }),
    }),
    forumQuestions: builder.query({
      query: id => ({
        url: `quetion_data_by_category?category_id=${id}`,
        method: 'GET',
      }),
    }),
    addQuestion: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.FORUM_ADD_QUESTION,
        body: body,
        method: 'POST',
      }),
    }),
    fetchMendateList: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.ACTIVE_MENDATE,
        body: body,
        method: 'POST',
      }),
    }),
    portfolio: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.PORTFOLIO,
        body: body,
        method: 'POST',
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
  useUpdatePasswordMutation,
  useLazyForumCategoriesQuery,
  useLazyForumQuestionsQuery,
  useFetchMendateListMutation,
  useAddQuestionMutation,
} = authService;
