import { K_REDIRECT_URI, K_REST_API_KEY } from '@/src/components/organisms/auth/login/KakaoLoginContainer';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method Not Allowed' });
	}

	const { code } = req.body;

	try {
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
		console.log('User Info:', userInfo);

		// TODO: 사용자 정보 저장 또는 세션 관리
		res.status(200).json({ user: userInfo });
	} catch (error) {
		console.error('Error fetching Kakao token:', error);
		res.status(500).json({ error: 'Failed to fetch token' });
	}
}
