import KaKaoIcon from '@/src/components/atoms/icons/KaKaoIcon';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const K_REST_API_KEY = process.env.NEXT_PUBLIC_K_REST_API_KEY;
const K_REDIRECT_URI = `http://localhost:3000/auth/login`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

const SocialLoginButton = () => {
	const router = useRouter();

	const handleKakaoLogin = () => {
		window.location.href = kakaoURL;
	};

	return (
		<Button
			startIcon={<KaKaoIcon />}
			variant='contained'
			sx={{ height: '56px', minWidth: '320px', borderRadius: '10px', backgroundColor: '#FEE500', boxShadow: 'none' }}
			//TODO : 시연용
			onClick={handleKakaoLogin}
		>
			<Typography variant='button' fontWeight={'fontWeightBold'}>
				카카오로 시작
			</Typography>
		</Button>
	);
};

export default SocialLoginButton;
