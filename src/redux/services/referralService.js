import {API_ENDPOINTS} from '../apiEndpoints/endPoints';
import {apiClient} from './apiClient';

export const forumService = apiClient.injectEndpoints({
  endpoints: builder => ({
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
  }),
});

export const {useAddReferralMutation, useLazyReferralListQuery} = forumService;
