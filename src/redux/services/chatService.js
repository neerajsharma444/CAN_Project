import {API_ENDPOINTS} from '../apiEndpoints/endPoints';
import {apiClient} from './apiClient';

export const chatService = apiClient.injectEndpoints({
  endpoints: builder => ({
    getChatList: builder.query({
      query: () => ({
        url: `get_chat_byroom_id?roomId=64b12a361cbf24a36ac3037c`,
        method: 'GET',
      }),
    }),
    createChat: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.CREATE_CHAT,
        body: body,
        method: 'POST',
      }),
    }),
  }),
});

export const {useLazyGetChatListQuery, useCreateChatMutation} = chatService;
