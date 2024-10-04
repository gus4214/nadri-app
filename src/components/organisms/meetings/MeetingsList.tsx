import MeetingsItem from '@/src/components/organisms/meetings/MeetingsItem';
import { useGetMeetings } from '@/src/fetchers/meetings';
import { Divider } from '@mui/material';
import { FC } from 'react';

interface MeetingsListProps {}

const MeetingsList: FC<MeetingsListProps> = ({}) => {
	const { data } = useGetMeetings({ BD_RATE: 1, BD_STATE: 'ING', LIMIT: 5, PAGE: 1 });

	const meetings = data.data;

	return (
		<>
			{meetings?.map((item, i) => (
				<>
					{i !== 0 && <Divider sx={{ my: '20px' }} />}
					<MeetingsItem key={item.BD_IDX} meetingsItem={item} />
				</>
			))}
		</>
	);
};

export default MeetingsList;
