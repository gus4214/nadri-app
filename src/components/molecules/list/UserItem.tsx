import DotDivisionText from '@/src/components/atoms/display/DotDivisionText';
import { Avatar, Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface UserItemProps {
	profile: string;
	nickName: string;
	gender: string;
	birth: string;
	memo: string;
}

const UserItem: FC<UserItemProps> = ({ profile, nickName, gender, birth, memo }) => {
	return (
		<Stack direction={'row'} alignItems={'center'} gap={'10px'}>
			<Avatar src={profile} />
			<Stack direction={'column'}>
				<Stack direction={'row'} gap={'8px'} alignItems={'center'}>
					<Typography variant='body2' fontWeight={'fontWeightMedium'}>
						{nickName}
					</Typography>
					<DotDivisionText texts={[`${gender}`, `${birth}`]} />
				</Stack>
				<Typography variant='body2'>{memo}</Typography>
			</Stack>
		</Stack>
	);
};

export default UserItem;
