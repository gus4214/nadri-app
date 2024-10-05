import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/api';
import { GetMeetingItem, GetMeetingRequest, GetMeetingsItem, GetMeetingsRequest } from '@/src/fetchers/meetings/types';
import { QueryClient, useQuery, useSuspenseQuery } from '@tanstack/react-query';

export const getMeetingsApi = (params: GetMeetingsRequest) => {
	return callApi<GetMeetingsRequest, GetMeetingsItem[]>({
		api: apis.GET_MEETINGS_API,
		queryString: params,
	});
};

export const useGetMeetings = (params: GetMeetingsRequest) => {
	return useSuspenseQuery({
		queryKey: ['meetings', params],
		queryFn: () => getMeetingsApi(params),
	});
};

export const getMeetingApi = (params: GetMeetingRequest) => {
	return callApi<GetMeetingRequest, GetMeetingItem>({
		api: apis.GET_MEETING_API,
		queryString: params,
	});
};

export const useGetMeeting = (params: GetMeetingRequest) => {
	return useSuspenseQuery({
		queryKey: ['meeting', params],
		queryFn: () => getMeetingApi(params),
	});
};

export const prefetchGetMeetings = (client: QueryClient, params: GetMeetingsRequest) => {
	return client.prefetchQuery({
		queryKey: ['meetings', params],
		queryFn: () => getMeetingsApi(params),
	});
};

export const prefetchGetMeeting = (client: QueryClient, params: GetMeetingRequest) => {
	return client.prefetchQuery({
		queryKey: ['meeting', params],
		queryFn: () => getMeetingApi(params),
	});
};
