import AppButton from '@/src/components/atoms/buttons/AppButton';
import MeetingDetail from '@/src/components/organisms/meetings/detail/MeetingDetail';
import { useGetMeeting } from '@/src/fetchers/meetings';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const MeetingRecruitDetailPage: NextPage = () => {
	const router = useRouter();
	const BD_IDX = router.query.id;

	const { data } = useGetMeeting({ BD_IDX: Number(BD_IDX) });

	//TODO 테스트용
	const buttonText = () => {
		if (data?.BD_MEMBER) return '모집 완료하기';
		return '모임 동행 요청하기';
	};

	return (
		<>
			<DetailNavBar title='임장 모임 상세 정보' goBack />
			<MeetingDetail meetingItem={data!} action={<AppButton size='large'>{buttonText()}</AppButton>} />
		</>
	);
};

export default MeetingRecruitDetailPage;
