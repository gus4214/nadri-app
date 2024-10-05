import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/api';
import { GetMeetingsItem, GetMeetingsRequest } from '@/src/fetchers/meetings/types';
import { useSuspenseQuery } from '@tanstack/react-query';

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
