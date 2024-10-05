import CircularProgressBox from '@/src/components/atoms/display/CircularProgressBox';
import Suspense from '@/src/components/molecules/suspense/Suspense';
import EndMeetingDetailContainer from '@/src/components/organisms/meetings/detail/end/EndMeetingDetailContainer';
import { prefetchGetMeeting } from '@/src/fetchers/meetings';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSidePropsContext, NextPage } from 'next';

const MeetingEndDetailPage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='임장 모임 상세 정보' goBack />
			<Suspense fallback={<CircularProgressBox pt={'60px'} />}>
				<EndMeetingDetailContainer />
			</Suspense>
		</>
	);
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const queryClient = new QueryClient();
	const id = context?.params?.id;

	await prefetchGetMeeting(queryClient, { BD_IDX: Number(id) });

	const props = {
		dehydrateState: dehydrate(queryClient),
	};

	return {
		props,
	};
}

export default MeetingEndDetailPage;
