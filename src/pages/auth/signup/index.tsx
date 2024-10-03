import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { NextPage } from 'next';

const SignUpPage: NextPage = () => {
	return (
		<>
			<DetailNavBar goBack title='회원가입' />
			<MainContainer sx={{ pt: '20px', height: '100%' }}></MainContainer>
		</>
	);
};

SignUpPage.layout = 'blank';

export default SignUpPage;
