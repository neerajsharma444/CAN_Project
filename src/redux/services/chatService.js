import {API_ENDPOINTS} from '../apiEndpoints/endPoints';
import {apiClient} from './apiClient';

export const chatService = apiClient.injectEndpoints({
  endpoints: builder => ({
    createChat: builder.query({
      query: body => ({
        url: API_ENDPOINTS.CREATE_CHAT,
        body: body,
        method: 'POST',
      }),
    }),
  }),
});

export const {useLazyCreateChatQuery} = chatService;
