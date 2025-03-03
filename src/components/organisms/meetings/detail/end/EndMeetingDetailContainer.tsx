import AppButton from '@/src/components/atoms/buttons/AppButton';
import MeetingDetail from '@/src/components/organisms/meetings/detail/MeetingDetail';
import ReviewDrawer from '@/src/components/organisms/meetings/detail/ReviewDrawer';
import { useGetMeeting } from '@/src/fetchers/meetings';
import { useRouter } from 'next/router';
import { useState } from 'react';

const EndMeetingDetailContainer = () => {
	const router = useRouter();
	const BD_IDX = router.query.id;

	const { data } = useGetMeeting({ BD_IDX: Number(BD_IDX) });

	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};
	return (
		<>
			<MeetingDetail
				meetingItem={data!}
				action={
					<AppButton size='large' onClick={toggleDrawer(true)}>
						임장 후기 작성하기
					</AppButton>
				}
			/>
			<ReviewDrawer open={open} onClose={toggleDrawer(false)} />
		</>
	);
};

export default EndMeetingDetailContainer;
