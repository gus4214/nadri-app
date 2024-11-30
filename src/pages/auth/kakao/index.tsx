import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { loginApi } from '@/src/fetchers/auth';

const KakaoAuthHandler = () => {
	const router = useRouter();

	useEffect(() => {
		const sendCodeToServer = async () => {
			const { code } = router.query;

			if (code) {
				try {
					const response = await axios.post('/api/kakao/token', { code });
					console.log('🚀 ~ sendCodeToServer ~ response:', response);

					// TODO: 유저 정보 요청 또는 세션 관리
					// router.push('/');
				} catch (error) {
					// console.error('Error authenticating with Kakao:', error);
					// router.push('/login?error=auth');
				}
			}
		};

		if (router.query.code) sendCodeToServer();
	}, [router.query.code]);

	return (
		<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
			<Typography variant='body1'>Authenticating with Kakao...</Typography>
		</Box>
	);
};

KakaoAuthHandler.layout = 'blank';

export default KakaoAuthHandler;
