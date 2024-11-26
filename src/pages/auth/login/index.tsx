import LoginPageIcon from '@/src/components/atoms/icons/LoginPageIcon';
import LogoIcon from '@/src/components/atoms/icons/LogoIcon';
import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import KakaoLoginContainer from '@/src/components/organisms/auth/login/KakaoLoginContainer';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { Box, Stack, Typography } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';

const LoginPage: NextPage = () => {
	return (
		<>
			<DetailNavBar goBack />
			<MainContainer sx={{ pt: '20px' }}>
				<Stack direction={'column'} height={'100%'}>
					<Typography variant='h2'>
						부동산 임장 모임, <br /> 나들이하듯 간편하게 시작하기
					</Typography>
					<Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'} gap={'64px'} mt={'130px'}>
						<LogoIcon sx={{ width: '94px', height: '74px' }} />
						<LoginPageIcon sx={{ width: '320px', height: '85px', color: 'white' }} />
					</Box>

					<Stack direction={'column'} alignItems={'center'} gap={'16px'} pt={'36px'}>
						<Typography variant='body2' fontWeight={500} color='primary' mb={'-10px'}>
							*실제 카카오 로그인 기능은 아직 준비 중이에요!
						</Typography>
						<Typography variant='label1' fontWeight={500} color='primary' mb={'-6px'}>
							(버튼 클릭 시 회원가입 페이지로 이동해요)
						</Typography>
						<KakaoLoginContainer />
						<Link href={'/'}>
							<Typography align='center' variant='body2' color={'grey.500'} sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
								로그인하지 않고 둘러보기
							</Typography>
						</Link>
					</Stack>
				</Stack>
			</MainContainer>
		</>
	);
};

LoginPage.layout = 'blank';

export default LoginPage;
