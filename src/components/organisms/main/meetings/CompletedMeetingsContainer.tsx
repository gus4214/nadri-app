import MeetingsCardList from '@/src/components/organisms/meetings/MeetingsCardList';
import { useGetMeetings } from '@/src/fetchers/meetings';
import { FC } from 'react';

interface CompletedMeetingsContainerProps {
	BD_RATE: number | string;
	BD_REGION: string;
}

const CompletedMeetingsContainer: FC<CompletedMeetingsContainerProps> = ({ BD_RATE, BD_REGION }) => {
	const { data } = useGetMeetings({ BD_STATE: 'END', BD_RATE, LIMIT: 3, PAGE: 1, BD_REGION });

	return <MeetingsCardList meetings={data || []} />;
};

export default CompletedMeetingsContainer;
