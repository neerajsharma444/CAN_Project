import {API_ENDPOINTS} from '../apiEndpoints/endPoints';
import {apiClient} from './apiClient';

export const forumService = apiClient.injectEndpoints({
  endpoints: builder => ({
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
    addAnswer: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.FORUM_ADD_RESPONSE,
        body: body,
        method: 'PUT',
      }),
    }),
  }),
});

export const {
  useLazyForumCategoriesQuery,
  useLazyForumQuestionsQuery,
  useAddQuestionMutation,
  useAddAnswerMutation,
} = forumService;
