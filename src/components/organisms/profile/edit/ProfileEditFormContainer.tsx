import AppButton from '@/src/components/atoms/buttons/AppButton';
import UnderlineTextButton from '@/src/components/atoms/buttons/UnderlineTextButton';
import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import SignUpForm from '@/src/components/organisms/auth/SignUpForm';
import useSignUpForm from '@/src/hooks/form/useSignUp.form';
import { Box } from '@mui/material';
import { Form } from 'react-hook-form';

const ProfileEditFormContainer = () => {
	const { formHandler } = useSignUpForm({ CU_NICKNAME: '알쓸신잡', CU_GENDER: '남성', CU_MEMO: '안녕하세요~! 저와 함께 부린이 탈출 해봐요 :)' });

	const {
		control,
		formState: { isValid },
	} = formHandler;

	return (
		<Form control={control}>
			<SignUpForm formHandler={formHandler} />
			<MainContainer sx={{ pt: '42px' }}>
				<AppButton size='large' disabled>
					서비스 준비중이에요!
				</AppButton>
				<Box display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} alignItems={'center'} py={'24px'}>
					<UnderlineTextButton buttonText='로그아웃' />
				</Box>
			</MainContainer>
		</Form>
	);
};

export default ProfileEditFormContainer;
