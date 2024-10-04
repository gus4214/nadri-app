import SignUpFormContainer from '@/src/components/organisms/auth/SignUpFormContainer';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { NextPage } from 'next';

const SignUpPage: NextPage = () => {
	return (
		<>
			<DetailNavBar goBack title='회원가입' />
			<SignUpFormContainer />
		</>
	);
};

SignUpPage.layout = 'blank';

export default SignUpPage;
