import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import MeetingFilterGroup from '@/src/components/molecules/inputs/MeetingFilterGroup';
import RecruitingMeetings from '@/src/components/organisms/main/meetings/RecruitingMeetings';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { Stack } from '@mui/material';
import { NextPage } from 'next';

const MeetingsRecruitPage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='모집 중 모임' goBack />
			<MainContainer sx={{ pt: '20px' }}>
				<Stack direction={'column'} gap={'16px'} component={'section'}>
					<MeetingFilterGroup />
					<RecruitingMeetings />
				</Stack>
			</MainContainer>
		</>
	);
};

export default MeetingsRecruitPage;
