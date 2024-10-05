import DotDivisionText from '@/src/components/atoms/display/DotDivisionText';
import ProfileGroup from '@/src/components/molecules/display/ProfileGroup';
import UserItem from '@/src/components/molecules/list/UserItem';
import { BD_STATE, GetMeetingItem } from '@/src/fetchers/meetings/types';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface MeetingDetailHeaderProps {
	meetingItem: GetMeetingItem;
}

const MeetingDetailHeader: FC<MeetingDetailHeaderProps> = ({ meetingItem }) => {
	const memberTextMap = {
		ING: '참여 중',
		END: '참여 함',
	} as Record<BD_STATE, string>;

	return (
		<Stack component={'header'} direction={'column'} gap={'24px'}>
			<Stack direction={'column'} gap={'8px'}>
				<Typography variant='subtitle1'>{meetingItem?.BD_TITLE}</Typography>
				<Stack direction={'row'}>
					<ProfileGroup profiles={meetingItem?.BD_USER_PROFILE || []} />
					<DotDivisionText
						texts={[
							`멤버 ${meetingItem?.BD_PART_CNT}/${meetingItem?.BD_CNT}명 ${memberTextMap[meetingItem?.BD_STATE]}`,
							`${meetingItem?.BD_CREATE_DATE} 게시`,
						]}
					/>
				</Stack>
			</Stack>
			<UserItem
				profile={meetingItem?.LEADER_INFO.cu_profile}
				nickName={meetingItem?.LEADER_INFO.cu_nickName}
				gender={meetingItem?.LEADER_INFO.cu_gender}
				birth={meetingItem?.LEADER_INFO.cu_birth}
				memo={meetingItem?.LEADER_INFO.cu_memo}
			/>
		</Stack>
	);
};

export default MeetingDetailHeader;
