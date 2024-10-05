import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/api';
import { GetMeetingItem, GetMeetingRequest, GetMeetingsItem, GetMeetingsRequest } from '@/src/fetchers/meetings/types';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

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

// 상세 페이지를 위한 React Query 훅
export const useGetMeeting = (params: GetMeetingRequest) => {
	return useQuery({
		queryKey: ['meetings', params],
		queryFn: () => getMeetingApi(params),
	});
};
