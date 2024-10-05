import { minHeights } from '@/src/@core/styles/minHeights';
import MeetingFilterGroup from '@/src/components/molecules/inputs/MeetingFilterGroup';
import ListHeader from '@/src/components/molecules/list/ListHeader';
import Suspense from '@/src/components/molecules/suspense/Suspense';
import CompletedMeetingsContainer from '@/src/components/organisms/main/meetings/CompletedMeetingsContainer';
import MeetingsContainer from '@/src/components/organisms/main/meetings/MeetingsContainer';
import useMeetingsFilter from '@/src/hooks/form/useMeetingsFilter.form';
import { Box, CircularProgress, Stack } from '@mui/material';
import { useRouter } from 'next/router';

const MeetingSection = () => {
	const router = useRouter();

	const { formHandler, BD_RATE, BD_REGION } = useMeetingsFilter();

	return (
		<Stack direction={'column'} gap={'16px'} component={'section'}>
			<MeetingFilterGroup formHandler={formHandler} />
			<Box>
				<ListHeader
					title='모집 중 모임'
					sx={{ pb: '20px' }}
					onClick={() => router.push({ pathname: '/meetings/recruit', query: { status: 'ing' } })}
				/>
				<Suspense
					fallback={
						<Box minHeight={'382px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
							<CircularProgress />
						</Box>
					}
				>
					<MeetingsContainer
						emptyText='앗! 등록된 모임이 없어요.'
						minHeight={minHeights.mainRecruiting}
						BD_STATE='ING'
						BD_RATE={BD_RATE}
						BD_REGION={BD_REGION}
						LIMIT={3}
						PAGE={1}
					/>
				</Suspense>
			</Box>
			<Box mt={'24px'} />
			<Box>
				<ListHeader title='완료된 모임' sx={{ pb: '20px' }} onClick={() => router.push('/meetings/end')} />
				<Suspense>
					<CompletedMeetingsContainer BD_RATE={BD_RATE} BD_REGION={BD_REGION} />
				</Suspense>
			</Box>
		</Stack>
	);
};

export default MeetingSection;
