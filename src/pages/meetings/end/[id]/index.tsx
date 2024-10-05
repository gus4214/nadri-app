import AppButton from '@/src/components/atoms/buttons/AppButton';
import MeetingDetail from '@/src/components/organisms/meetings/detail/MeetingDetail';
import ReviewDrawer from '@/src/components/organisms/meetings/detail/ReviewDrawer';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { NextPage } from 'next';
import { useState } from 'react';

const MeetingEndDetailPage: NextPage = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};
	return (
		<>
			<DetailNavBar title='임장 모임 상세 정보' goBack />
			<MeetingDetail
				meetingItem={{ BD_STATE: 'END' }}
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

export default MeetingEndDetailPage;
