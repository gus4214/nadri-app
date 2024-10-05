import { minHeights } from '@/src/@core/styles/minHeights';
import CircularProgressBox from '@/src/components/atoms/display/CircularProgressBox';
import ListHeader from '@/src/components/molecules/list/ListHeader';
import Suspense from '@/src/components/molecules/suspense/Suspense';
import CompletedMeetingsContainer from '@/src/components/organisms/main/meetings/CompletedMeetingsContainer';
import MeetingsContainer from '@/src/components/organisms/main/meetings/MeetingsContainer';
import { Box, Stack } from '@mui/material';
import { useRouter } from 'next/router';

const MeetingSection = () => {
	const router = useRouter();

	return (
		<Stack direction={'column'} gap={'16px'} component={'section'}>
			<Box>
				<ListHeader
					title='최신 임장 모임'
					sx={{ pb: '20px' }}
					onClick={() => router.push({ pathname: '/meetings/recruit', query: { status: 'ing' } })}
				/>
				<Suspense fallback={<CircularProgressBox minHeight={minHeights.mainRecruiting} />}>
					<MeetingsContainer
						emptyText='앗! 등록된 모임이 없어요.'
						minHeight={minHeights.mainRecruiting}
						BD_STATE='ING'
						BD_RATE={''}
						BD_REGION={''}
						LIMIT={3}
						PAGE={1}
					/>
				</Suspense>
			</Box>
			<Box mt={'24px'} />
			<Box>
				<ListHeader title='완료된 임장 모임' sx={{ pb: '20px' }} onClick={() => router.push('/meetings/end')} />
				<Suspense fallback={<CircularProgressBox minHeight={minHeights.mainCompleted} />}>
					<CompletedMeetingsContainer BD_RATE={''} BD_REGION={''} />
				</Suspense>
			</Box>
		</Stack>
	);
};

export default MeetingSection;
