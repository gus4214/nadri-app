import KakaoLoginButton from '@/src/components/atoms/buttons/KakaoLoginButton';

const KakaoLoginContainer = () => {
	const handleKakaoLogin = () => {
		// Next.js API로 리다이렉션 요청
		window.location.href = '/api/kakao/redirect';
	};

	return (
		<>
			<KakaoLoginButton onClick={handleKakaoLogin} />
		</>
	);
};

export default KakaoLoginContainer;
