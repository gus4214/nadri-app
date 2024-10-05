import { minHeights } from '@/src/@core/styles/minHeights';
import EmptyListDisplay from '@/src/components/molecules/list/EmptyListDisplay';
import MeetingsCardItem from '@/src/components/organisms/meetings/MeetingsCardItem';
import { GetMeetingsItem } from '@/src/fetchers/meetings/types';
import { Box } from '@mui/material';
import { FC } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

interface MeetingsCardListProps {
	meetings: GetMeetingsItem[];
}

const MeetingsCardList: FC<MeetingsCardListProps> = ({ meetings }) => {
	const isMeetings = !!meetings.length;

	return (
		<>
			{!isMeetings && <EmptyListDisplay text='아직 완료된 모임이 없어요.' sx={{ pt: '60px' }} />}
			{!!isMeetings && (
				<Box component={'ul'} minHeight={minHeights.mainCompleted}>
					<PerfectScrollbar options={{ wheelPropagation: false }} style={{ display: 'flex', gap: '12px' }}>
						{meetings?.map((item, i) => <MeetingsCardItem key={item.BD_IDX} meetingsItem={item} />)}
					</PerfectScrollbar>
				</Box>
			)}
		</>
	);
};

export default MeetingsCardList;
