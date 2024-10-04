import DescriptionBox from '@/src/components/atoms/display/DescriptionBox';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useRouter } from 'next/router';

const ProfileHeader = () => {
	const router = useRouter();

	return (
		<Box component={'header'} display={'flex'} flexDirection={'column'} gap={'24px'}>
			<Stack direction={'row'} gap={'16px'} alignItems={'center'} position={'relative'}>
				<Avatar src={'/images/sample/profile.png'} sx={{ width: '76px', height: '76px' }} />
				<Stack direction={'column'} gap={'6px'}>
					<Typography variant='subtitle1' fontWeight={'fontWeightBold'}>
						알쓸신잡
					</Typography>
					<Typography variant='body2'>남성﹒1999. 12. 13</Typography>
				</Stack>
				<Box sx={{ position: 'absolute', right: 0, top: 0, cursor: 'pointer' }} onClick={()=>router.push('/profile/edit')}>
					<DriveFileRenameOutlineIcon sx={{ color: 'grey.500' }} />
				</Box>
			</Stack>
			<DescriptionBox description='안녕하세요~! 저와 함께 부린이 탈출 해봐요 :)' />
		</Box>
	);
};

export default ProfileHeader;
