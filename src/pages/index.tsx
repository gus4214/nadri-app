import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import Banner from '@/src/components/organisms/main/Banner';
import MeetingSection from '@/src/components/organisms/main/meetings/MeetingSection';
import { prefetchGetMeetings } from '@/src/fetchers/meetings';
import MainNavBar from '@/src/layouts/components/MainNavBar';
import { Button, Typography } from '@mui/material';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();

	return (
		<>
			<MainNavBar />
			<Banner />
			<MainContainer sx={{ pt: '20px', pb: '24px' }}>
				<Button
					variant='contained'
					sx={{ mb: '20px', borderRadius: '6px', boxShadow: 'none', backgroundColor: 'primary.light' }}
					onClick={() => router.push('/auth/login')}
				>
					<Typography variant='label1' color='primary'>
						지금 로그인하고 더 다양한 서비스를 경험해보세요!
					</Typography>
				</Button>
				<MeetingSection />
			</MainContainer>
		</>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const queryClient = new QueryClient();

	await prefetchGetMeetings(queryClient, { BD_STATE: '', BD_RATE: '', BD_REGION: '', LIMIT: 6, PAGE: 1 });

	const props = {
		dehydrateState: dehydrate(queryClient),
	};

	return {
		props,
	};
}
