import MeetingFilterGroup from '@/src/components/molecules/inputs/MeetingFilterGroup';
import Suspense from '@/src/components/molecules/suspense/Suspense';
import CompletedMeetings from '@/src/components/organisms/main/meetings/CompletedMeetings';
import RecruitingMeetings from '@/src/components/organisms/main/meetings/RecruitingMeetings';
import { Box, Stack } from '@mui/material';

const MeetingSection = () => {
	return (
		<Stack direction={'column'} gap={'16px'} component={'section'}>
			<MeetingFilterGroup />
			<Suspense>
				<RecruitingMeetings isHeader />
			</Suspense>
			<Box mt={'24px'} />
			<CompletedMeetings />
		</Stack>
	);
};

export default MeetingSection;
