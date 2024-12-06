import { callApi } from '@/src/fetchers';
import { apis } from '@/src/fetchers/api';
import {
	LoginRequest,
	LoginResult,
	NickNameCheckResult,
	RegisterProfileImgRequest,
	RegisterProfileImgResult,
	SignupRequest,
	SignupResult,
} from '@/src/fetchers/auth/types';

export const loginApi = (params: LoginRequest) => {
	return callApi<LoginRequest, LoginResult>({
		api: apis.LOGIN_API,
		body: params,
	});
};

export const signupApi = (params: SignupRequest) => {
	return callApi<SignupRequest, SignupResult>({
		api: apis.SIGN_UP_API,
		body: params,
	});
};

export const nickNameCheckApi = (input: FormData) => {
	return callApi<FormData, NickNameCheckResult>(
		{
			api: apis.NICK_NAME_CHECK_API,
			body: input,
		},
		{ 'Content-Type': 'multipart/form-data' }
	);
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
