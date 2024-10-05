import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import Banner from '@/src/components/organisms/main/Banner';
import MeetingSection from '@/src/components/organisms/main/meetings/MeetingSection';
import { prefetchGetMeetings } from '@/src/fetchers/meetings';
import MainNavBar from '@/src/layouts/components/MainNavBar';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext } from 'next';

export default function Home() {
	return (
		<>
			<MainNavBar />
			<Banner />
			<MainContainer sx={{ pt: '20px', pb: '24px' }}>
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
