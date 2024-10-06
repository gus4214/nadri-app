import KaKaoIcon from '@/src/components/atoms/icons/KaKaoIcon';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const SocialLoginButton = () => {
	const router = useRouter();
	return (
		<Button
			startIcon={<KaKaoIcon />}
			variant='contained'
			sx={{ height: '56px', minWidth: '320px', borderRadius: '10px', backgroundColor: '#FEE500', boxShadow: 'none' }}
			//TODO : 시연용
			onClick={() => router.push('/auth/signup')}
		>
			<Typography variant='button' fontWeight={'fontWeightBold'}>
				카카오로 시작
			</Typography>
		</Button>
	);
};

export default SocialLoginButton;
