import SignUpForm from '@/src/components/organisms/auth/SignUpForm';
import useSignUpForm from '@/src/hooks/form/useSignUp.form';
import { FC } from 'react';

interface SignUpFormContainerProps {
	profileUrl?: string;
	userId: number;
}

const SignUpFormContainer: FC<SignUpFormContainerProps> = ({ profileUrl, userId }) => {
	const { formHandler } = useSignUpForm({
		CU_NICKNAME: '',
		CU_BIRTH: undefined,
		CU_GENDER: '남성',
		CU_MEMO: '',
	});

	const { handleSubmit } = formHandler;

	const onSubmit = async () => {
		const formData = new FormData();
	};

	return (
		<form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
			<SignUpForm formHandler={formHandler} profileUrl={profileUrl} />
		</form>
	);
};

export default SignUpFormContainer;
