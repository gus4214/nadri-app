import { Avatar, Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface UserItemProps {}

const UserItem: FC<UserItemProps> = () => {
	return (
		<Stack direction={'row'} alignItems={'center'} gap={'10px'}>
			<Avatar src='/images/sample/profile.png' />
			<Stack direction={'column'}>
				<Stack direction={'row'} gap={'8px'} alignItems={'center'}>
					<Typography variant='body2' fontWeight={'fontWeightMedium'}>
						임장조아
					</Typography>
					<Typography variant='body2' color='grey.500'>
						남성﹒1999. 12. 13
					</Typography>
				</Stack>
				<Typography variant='body2'>저와 함께 부린이 탈출해요~!</Typography>
			</Stack>
		</Stack>
	);
};

export default UserItem;
