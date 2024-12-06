import SignUpFormContainer from '@/src/components/organisms/auth/SignUpFormContainer';
import { profileUrlKey, userIdKey } from '@/src/config/auth';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { GetServerSidePropsContext, NextPage } from 'next';

const SignUpPage: NextPage<{ profileUrl?: string; userId: number }> = ({ profileUrl, userId }) => {
	return (
		<>
			<DetailNavBar goBack title='회원가입' />
			<SignUpFormContainer profileUrl={profileUrl} userId={userId} />
		</>
	);
};

SignUpPage.layout = 'blank';

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const userId = context.req.cookies[userIdKey] || null;
	const profileUrl = context.req.cookies[profileUrlKey] || null;

	return { props: { profileUrl, userId } };
}

export default SignUpPage;
