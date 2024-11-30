import { K_REDIRECT_URI, K_REST_API_KEY } from '@/src/components/organisms/auth/login/KakaoLoginContainer';
import { SERVER_API } from '@/src/fetchers/api';
import { LoginResult } from '@/src/fetchers/auth/types';
import axios, { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method Not Allowed' });
	}

	const { code } = req.body;

	try {
		// 토큰 받기
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

		// 사용자 정보 요청
		const userInfoResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		const userInfo = userInfoResponse.data;

		// 카카오 정보 기반 유저 로그인
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

		res.status(200).json(loginResponse.data);
	} catch (error) {
		const axiosError = error as AxiosError<LoginResult>;

		if (axiosError.response) {
			switch (axiosError.response.status) {
				case 401:
					return res.redirect('/');
				case 400:
					console.log(axiosError.response.data);
					// res.setHeader('Set-Cookie', `temporaryToken=${axiosError.response.data.message}; Path=/; Max-Age=3600`);
					res.redirect('/auth/signup');
					break;
				default:
				// 다른 HTTP 에러 처리
			}
		}
		console.error('Error in googleAuthCallback:', error);
		res.status(500).send('An error occurred during authentication.');
	}
}
