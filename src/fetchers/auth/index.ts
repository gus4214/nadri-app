import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/api';
import { LoginRequest, LoginResult } from '@/src/fetchers/auth/types';

export const loginApi = (params: LoginRequest) => {
	return callApi<LoginRequest, LoginResult>({
		api: apis.LOGIN_API,
		body: params,
	});
};
