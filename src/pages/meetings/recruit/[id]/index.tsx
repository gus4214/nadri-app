import AppButton from '@/src/components/atoms/buttons/AppButton';
import MeetingDetail from '@/src/components/organisms/meetings/detail/MeetingDetail';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { NextPage } from 'next';

const MeetingRecruitDetailPage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='임장 모임 상세 정보' goBack />
			<MeetingDetail meetingItem={{ BD_STATE: 'ING' }} action={<AppButton size='large'>모임 동행 요청하기</AppButton>} />
		</>
	);
};

export default MeetingRecruitDetailPage;
