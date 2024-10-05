import MeetingsItem from '@/src/components/organisms/meetings/MeetingsItem';
import { BD_STATE, GetMeetingsItem } from '@/src/fetchers/meetings/types';
import { Box, Divider } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

interface MeetingsListProps {
	meetings: GetMeetingsItem[];
	renderEmpty: ReactNode;
	minHeight?: string;
	BD_STATE: BD_STATE;
}

const MeetingsList: FC<MeetingsListProps> = ({ meetings, renderEmpty, minHeight, BD_STATE }) => {
	const router = useRouter();
	const isMeetings = !!meetings.length;

	const routeMap = {
		ING: 'recruit',
		END: 'end',
	} as Record<BD_STATE, string>;

	return (
		<>
			{!isMeetings && renderEmpty}
			{!!isMeetings && (
				<Box component={'ul'} minHeight={minHeight}>
					{meetings?.map((item, i) => (
						<>
							{i !== 0 && <Divider sx={{ my: '20px' }} />}
							<MeetingsItem key={item.BD_IDX} meetingsItem={item} onClick={() => router.push(`/meetings/${routeMap[BD_STATE]}/${item.BD_IDX}`)} />
						</>
					))}
				</Box>
			)}
		</>
	);
};

export default MeetingsList;
