import {API_ENDPOINTS} from '../apiEndpoints/endPoints';
import {apiClient} from './apiClient';

export const eventService = apiClient.injectEndpoints({
  endpoints: builder => ({
    fetchEvents: builder.query({
      query: () => ({
        url: API_ENDPOINTS.CALENDAR,
        method: 'GET',
      }),
    }),
    getCalendarEvents: builder.mutation({
      query: body => ({
        url: API_ENDPOINTS.EVENTS,
        body: body,
        method: 'POST',
      }),
    }),
  }),
});

export const {useLazyFetchEventsQuery, useGetCalendarEventsMutation} =
  eventService;
