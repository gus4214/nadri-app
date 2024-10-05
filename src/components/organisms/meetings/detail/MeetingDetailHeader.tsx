import DotDivisionText from '@/src/components/atoms/display/DotDivisionText';
import UserItem from '@/src/components/molecules/list/UserItem';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface MeetingDetailHeaderProps {}

const MeetingDetailHeader: FC<MeetingDetailHeaderProps> = ({}) => {
	return (
		<Stack component={'header'} direction={'column'} gap={'24px'}>
			<Stack direction={'column'} gap={'8px'}>
				<Typography variant='subtitle1'>광명 뉴타운 뽀개기</Typography>
				<Stack direction={'row'}>
					<DotDivisionText texts={['멤버 2/5명 참여 중', '4시간 전 게시']} />
				</Stack>
			</Stack>
			<UserItem profile='/images/sample/profile.png' nickName='임장조아' gender='남성' birth='1999. 12. 13' memo='저와 함께 부린이 탈출해요~!' />
		</Stack>
	);
};

export default MeetingDetailHeader;
