import AppButton from '@/src/components/atoms/buttons/AppButton';
import BottomFixedContainer from '@/src/components/atoms/layouts/BottomFixedContainer';
import SignUpForm from '@/src/components/organisms/auth/SignUpForm';
import useSignUpForm from '@/src/hooks/form/useSignUp.form';
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
			<BottomFixedContainer bottom={60}>
				<AppButton
					size='large'
					// disabled={!isValid}
					disabled
				>
					서비스 준비중이에요!
				</AppButton>
			</BottomFixedContainer>
		</Form>
	);
};

export default ProfileEditFormContainer;
