import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import EndMeetingsSection from '@/src/components/organisms/meetings/end/EndMeetingsSection';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { NextPage } from 'next';

const MeetingsEndPage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='완료된 모임' goBack />
			<MainContainer sx={{ pt: '20px' }}>
				<EndMeetingsSection />
			</MainContainer>
		</>
	);
};

export default MeetingsEndPage;
