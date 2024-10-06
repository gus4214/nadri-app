import AppButton from '@/src/components/atoms/buttons/AppButton';
import BottomFixedContainer from '@/src/components/atoms/layouts/BottomFixedContainer';
import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import SignUpForm from '@/src/components/organisms/auth/SignUpForm';
import useSignUpForm from '@/src/hooks/form/useSignUp.form';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';

const SignUpFormContainer = () => {
	const router = useRouter();
	const { formHandler } = useSignUpForm({
		CU_NICKNAME: '',
		CU_BIRTH: undefined,
		CU_GENDER: '남성',
		CU_MEMO: '',
	});

	const {
		formState: { isValid },
	} = formHandler;

	return (
		<form autoComplete='off'>
			<SignUpForm formHandler={formHandler} />
			{/* <BottomFixedContainer> */}
			<MainContainer sx={{ pt: '64px' }}>
				<AppButton size='large' disabled={!isValid} onClick={() => router.push('/')}>
					시작하기
				</AppButton>
				<Typography variant='body2' fontWeight={500} color='primary' align='center' mt={'10px'}>
					*실제 회원가입 기능은 아직 준비 중이에요!
				</Typography>
				<Typography variant='label1' fontWeight={500} color='primary' align='center' mt={'6px'}>
					(정보 기입 시 홈 화면으로 이동 가능해요!)
				</Typography>
			</MainContainer>
			{/* </BottomFixedContainer> */}
		</form>
	);
};

export default SignUpFormContainer;
