import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/api';
import { LoginRequest, LoginResult, RegisterProfileImgRequest, RegisterProfileImgResult } from '@/src/fetchers/auth/types';

export const loginApi = (params: LoginRequest) => {
	return callApi<LoginRequest, LoginResult>({
		api: apis.LOGIN_API,
		body: params,
	});
};

export const registerProfileImgApi = (input: RegisterProfileImgRequest) => {
	return callApi<RegisterProfileImgRequest, RegisterProfileImgResult>(
		{
			api: apis.SIGN_UP_PROFILE_IMG_REGISTER_API,
			body: input,
		},
		{ 'Content-Type': 'multipart/form-data' }
	);
};
