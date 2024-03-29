import {API_ENDPOINTS} from '../apiEndpoints/endPoints';
import {apiClient} from './apiClient';

export const authService = apiClient.injectEndpoints({
  endpoints: builder => ({
    fetchStates: builder.query({
      query: body => ({
        url: API_ENDPOINTS.CREATE_CHAT,
        body: body,
        method: 'POST',
      }),
    }),
  }),
});
