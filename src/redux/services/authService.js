import {API_ENDPOINTS, API_URL} from '../apiEndpoints/endPoints';
import {apiClient} from './apiClient';

export const authService = apiClient.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation({
      query: body => ({
        url: `register`,
        body: body,
        method: 'POST',
      }),
    }),
  }),
});

export const {useSignUpMutation} = authService;
