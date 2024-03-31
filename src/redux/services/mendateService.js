import {API_ENDPOINTS} from '../apiEndpoints/endPoints';
import {apiClient} from './apiClient';

export const mendateService = apiClient.injectEndpoints({
  endpoints: builder => ({
    fetchMendateList: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.ACTIVE_MENDATE,
        body: body,
        method: 'POST',
      }),
    }),
    portfolioList: builder.query({
      query: id => ({
        url: `portfolio/list_by_mandate?user_registered_id=${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useFetchMendateListMutation, useLazyPortfolioListQuery} =
  mendateService;
