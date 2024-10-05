import { minHeights } from '@/src/@core/styles/minHeights';
import ListHeader from '@/src/components/molecules/list/ListHeader';
import Suspense from '@/src/components/molecules/suspense/Suspense';
import CompletedMeetingsContainer from '@/src/components/organisms/main/meetings/CompletedMeetingsContainer';
import MeetingsContainer from '@/src/components/organisms/main/meetings/MeetingsContainer';
import { Box, CircularProgress, Stack } from '@mui/material';
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
				<Suspense
					fallback={
						<Box minHeight={minHeights.mainRecruiting} display={'flex'} justifyContent={'center'} alignItems={'center'}>
							<CircularProgress />
						</Box>
					}
				>
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
				<Suspense
					fallback={
						<Box minHeight={minHeights.mainCompleted} display={'flex'} justifyContent={'center'} alignItems={'center'}>
							<CircularProgress />
						</Box>
					}
				>
					<CompletedMeetingsContainer BD_RATE={''} BD_REGION={''} />
				</Suspense>
			</Box>
		</Stack>
	);
};

export default MeetingSection;
