import AppButton from '@/src/components/atoms/buttons/AppButton';
import BottomFixedContainer from '@/src/components/atoms/layouts/BottomFixedContainer';
import SignUpForm from '@/src/components/organisms/auth/SignUpForm';
import useSignUpForm from '@/src/hooks/form/useSignUp.form';

const SignUpFormContainer = () => {
	const { formHandler } = useSignUpForm();

	const {
		formState: { isValid },
	} = formHandler;

	return (
		<form autoComplete='off'>
			<SignUpForm formHandler={formHandler} />
			<BottomFixedContainer>
				<AppButton size='large' disabled={!isValid}>
					시작하기
				</AppButton>
			</BottomFixedContainer>
		</form>
	);
};

export default SignUpFormContainer;
