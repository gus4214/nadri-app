import SignUpForm from '@/src/components/organisms/auth/SignUpForm';
import { nickNameCheckApi, signupApi } from '@/src/fetchers/auth';
import { SignupRequest } from '@/src/fetchers/auth/types';
import useSignUpForm, { SignUpFormData } from '@/src/hooks/form/useSignUp.form';
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

	const onSubmit = async (data: SignUpFormData) => {
		// const result = await signupApi(data as SignupRequest);
	};

	const handleNickNameCheck = async (nickName: string) => {
		const formData = new FormData();
		formData.append('CU_NICKNAME', nickName);
		// const result = await nickNameCheckApi(formData);
	};

	return (
		<form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
			<SignUpForm formHandler={formHandler} profileUrl={profileUrl} onNickNameCheck={handleNickNameCheck} />
		</form>
	);
};

export default SignUpFormContainer;
