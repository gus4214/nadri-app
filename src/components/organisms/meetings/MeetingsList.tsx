import MeetingsItem from '@/src/components/organisms/meetings/MeetingsItem';
import { GetMeetingsItem } from '@/src/fetchers/meetings/types';
import { Box, Divider } from '@mui/material';
import { FC, ReactNode } from 'react';

interface MeetingsListProps {
	meetings: GetMeetingsItem[];
	renderEmpty: ReactNode;
	minHeight?: string;
}

const MeetingsList: FC<MeetingsListProps> = ({ meetings, renderEmpty, minHeight }) => {
	const isMeetings = !!meetings.length;

	return (
		<>
			{!isMeetings && renderEmpty}
			{!!isMeetings && (
				<Box component={'ul'} minHeight={minHeight}>
					{meetings?.map((item, i) => (
						<>
							{i !== 0 && <Divider sx={{ my: '20px' }} />}
							<MeetingsItem key={item.BD_IDX} meetingsItem={item} />
						</>
					))}
				</Box>
			)}
		</>
	);
};

export default MeetingsList;
