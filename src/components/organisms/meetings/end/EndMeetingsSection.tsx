import MeetingFilterGroup from '@/src/components/molecules/inputs/MeetingFilterGroup';
import Suspense from '@/src/components/molecules/suspense/Suspense';
import MeetingsContainer from '@/src/components/organisms/main/meetings/MeetingsContainer';
import useMeetingsFilter from '@/src/hooks/form/useMeetingsFilter.form';
import { Stack } from '@mui/material';

const EndMeetingsSection = () => {
	const { formHandler, BD_RATE, BD_REGION } = useMeetingsFilter();

	return (
		<Stack direction={'column'} gap={'16px'} component={'section'}>
			<MeetingFilterGroup formHandler={formHandler} />
			<Suspense>
				<MeetingsContainer emptyText='아직 완료된 모임이 없어요.' BD_STATE='END' BD_RATE={BD_RATE} BD_REGION={BD_REGION} LIMIT={10} PAGE={1} />
			</Suspense>
		</Stack>
	);
};

export default EndMeetingsSection;
