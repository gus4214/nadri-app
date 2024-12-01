import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Box, Typography } from '@mui/material';
import { loginApi } from '@/src/fetchers/auth';

const KakaoAuthHandler = () => {
	const router = useRouter();

	useEffect(() => {
		const sendCodeToServer = async () => {
			const { code } = router.query;

			if (code) {
				const response = await axios.post('/api/kakao/token', { code });
				console.log('🚀 ~ sendCodeToServer ~ response:', response);
				try {
					const loginResult = await loginApi({ CU_ID: response.data.id });

					// TODO: 유저 정보 요청 또는 세션 관리
					// router.push('/');
				} catch (e) {
					const error = e as AxiosError;
					if (error.status === 400) {
						router.push('/auth/signup');
					}
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
