import AppButton from '@/src/components/atoms/buttons/AppButton';
import MeetingDetail from '@/src/components/organisms/meetings/detail/MeetingDetail';
import { useGetMeeting } from '@/src/fetchers/meetings';
import { useRouter } from 'next/router';

const RecruitMeetingDetailContainer = () => {
	const router = useRouter();
	const BD_IDX = router.query.id;

	const { data } = useGetMeeting({ BD_IDX: Number(BD_IDX) });

	//TODO 테스트용
	const buttonText = () => {
		if (data?.BD_MEMBER) return '모임 모집 완료하기';
		return '모임 동행 요청하기';
	};

	return (
		<>
			<MeetingDetail meetingItem={data!} action={<AppButton size='large'>{buttonText()}</AppButton>} />
		</>
	);
};

export default RecruitMeetingDetailContainer;
