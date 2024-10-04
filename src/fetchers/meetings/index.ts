import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/api';

interface GetMeetingsRequest {
	BD_STATE: string;
	BD_RATE: number;
	LIMIT: number;
	PAGE: number;
}
interface GetMeetingsItem {
	cu_idx: number;
	timestamp: Date;
	status: string;
	msg: string;
}

export const getMeetingsApi = (params: GetMeetingsRequest) => {
	return callApi<GetMeetingsRequest, GetMeetingsItem>({
		api: apis.GET_MEETINGS_API,
		queryString: params,
	});
};
