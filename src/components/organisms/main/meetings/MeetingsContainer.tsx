import EmptyListDisplay from '@/src/components/molecules/list/EmptyListDisplay';
import MeetingsList from '@/src/components/organisms/meetings/MeetingsList';
import { useGetMeetings } from '@/src/fetchers/meetings';
import { BD_STATE } from '@/src/fetchers/meetings/types';
import { FC } from 'react';

interface MeetingsContainerProps {
	minHeight?: string;
	emptyText?: string;
	BD_STATE: BD_STATE;
	BD_RATE: number | string;
	BD_REGION: string;
	LIMIT: number;
	PAGE: number;
}

const MeetingsContainer: FC<MeetingsContainerProps> = ({ minHeight, emptyText, BD_STATE, BD_RATE, BD_REGION, LIMIT = 3, PAGE = 1 }) => {
	const { data } = useGetMeetings({ BD_STATE, BD_RATE, LIMIT, PAGE, BD_REGION });

	return (
		<MeetingsList meetings={data || []} minHeight={minHeight} renderEmpty={<EmptyListDisplay text={emptyText} sx={{ minHeight, pt: '60px' }} />} />
	);
};

export default MeetingsContainer;
