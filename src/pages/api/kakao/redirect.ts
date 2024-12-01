import { NextApiRequest, NextApiResponse } from 'next';

const K_REST_API_KEY = process.env.NEXT_PUBLIC_K_REST_API_KEY;
const WEB_HOST = process.env.NEXT_PUBLIC_WEB;
const K_REDIRECT_URI = `${WEB_HOST}/api/kakao/callback`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code&scope=profile_nickname,profile_image`;

	res.redirect(kakaoAuthURL);
}
