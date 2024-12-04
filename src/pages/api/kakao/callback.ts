import { profileUrlKey, userIdKey } from '@/src/config/auth';
import { SERVER_API, WEB_HOST } from '@/src/fetchers/api';
import { LoginResult } from '@/src/fetchers/auth/types';
import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const K_REST_API_KEY = process.env.NEXT_PUBLIC_K_REST_API_KEY;
const K_REDIRECT_URI = `${WEB_HOST}/api/kakao/callback`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { code } = req.query;

	// 1. 카카오 OAuth 토큰 받기
	const tokenResponse = await axios.post('https://kauth.kakao.com/oauth/token', null, {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		params: {
			grant_type: 'authorization_code',
			client_id: K_REST_API_KEY,
			redirect_uri: K_REDIRECT_URI,
			code,
		},
	});
	const { access_token } = tokenResponse.data;

	// 2. 사용자 정보 요청
	const userInfoResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
	const userInfo = userInfoResponse.data;

	try {
		// 3. 유저 로그인 api 호출
		const loginResponse = await axios.request<LoginResult>({
			method: 'POST',
			baseURL: `${SERVER_API}`,
			url: '/api/customer/login.ajax',
			data: {
				CU_ID: userInfo.id,
			},
			timeout: 30 * 1000,
			headers: {
				'Content-Type': 'application/json;charset=UTF-8',
				Accept: 'application/json',
			},
			withCredentials: false,
		});

		res.setHeader('Set-Cookie', `${userIdKey}=${loginResponse.data.cu_idx}; Path=/; Max-Age=3600`);
		res.redirect('/');
	} catch (error) {
		const axiosError = error as AxiosError<LoginResult>;

		if (axiosError.response) {
			switch (axiosError.response.status) {
				case 400:
					res.setHeader('Set-Cookie', [
						`${profileUrlKey}=${userInfo.properties.profile_image}; Path=/auth/signup; Max-Age=3600`,
						`${userIdKey}=${userInfo.id}; Path=/auth/signup; Max-Age=3600`,
					]);
					res.redirect('/auth/signup');
					break;
				default:
				// 다른 HTTP 에러 처리
			}
		}
		res.status(500).send('An error occurred during authentication.');
	}
}
