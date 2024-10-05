import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import RecruitMeetingsSection from '@/src/components/organisms/meetings/recruit/RecruitMeetingsSection';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { NextPage } from 'next';

const MeetingsRecruitPage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='모집 중 모임' goBack />
			<MainContainer sx={{ pt: '20px' }}>
				<RecruitMeetingsSection />
			</MainContainer>
		</>
	);
};

export default MeetingsRecruitPage;
