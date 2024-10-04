import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface GetMeetingsRequest {
	BD_STATE: 'ING' | 'COMPLETE' | 'END' | string;
	BD_RATE: number;
	LIMIT: number;
	PAGE: number;
}
interface GetMeetingsItem {
	BD_IDX: number;
	BD_TITLE: string;
	BD_STATE: string;
	BD_CNT: number;
	BD_PART_CNT: number;
	BD_RATE: number;
	BD_IMG: string;
	BD_MAP: string;
	BD_LINK: string;
	BD_START_DATE: Date;
	BD_USER_PROFILE: USER_PROFILE[];
}

interface USER_PROFILE {
	profile: string;
}

export const getMeetingsApi = (params: GetMeetingsRequest) => {
	return callApi<GetMeetingsRequest, GetMeetingsItem>({
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
