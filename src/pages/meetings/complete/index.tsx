import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import MeetingFilterGroup from '@/src/components/molecules/inputs/MeetingFilterGroup';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { Stack } from '@mui/material';
import { NextPage } from 'next';

const MeetingsCompletePage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='완료된 모임' goBack />
			<MainContainer sx={{ pt: '20px' }}>
				<Stack direction={'column'} gap={'16px'} component={'section'}>
					<MeetingFilterGroup />
				</Stack>
			</MainContainer>
		</>
	);
};

export default MeetingsCompletePage;
