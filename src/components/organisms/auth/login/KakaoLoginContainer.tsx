import KakaoLoginButton from '@/src/components/atoms/buttons/KakaoLoginButton';
import { WEB_HOST } from '@/src/fetchers/api';

export const K_REST_API_KEY = process.env.NEXT_PUBLIC_K_REST_API_KEY;
export const K_REDIRECT_URI = `${WEB_HOST}/auth/kakao`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code&scope=profile_nickname,profile_image&prompt=login`;

const KakaoLoginContainer = () => {
	const handleKakaoLogin = () => {
		window.location.href = kakaoURL;
	};

	return (
		<>
			<KakaoLoginButton onClick={handleKakaoLogin} />
		</>
	);
};

export default KakaoLoginContainer;
