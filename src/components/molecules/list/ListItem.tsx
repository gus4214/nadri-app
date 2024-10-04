import BasicTag from '@/src/components/atoms/tags/BasicTag';
import CornerTag from '@/src/components/atoms/tags/CornerTag';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface ListItemProps {
	title?: string;
	onClick?: () => void;
}

const ListItem: FC<ListItemProps> = ({ title, onClick }) => {
	return (
		<Stack direction={'row'} gap={'16px'} height={'100px'} alignItems={'center'} sx={{ cursor: 'pointer' }} onClick={onClick}>
			<Box sx={{ position: 'relative', width: '100px', height: '100px', aspectRatio: '1/1' }}>
				<Image src={'/images/sample/sample2.jpg'} alt='banner' fill objectFit='cover' objectPosition='center' style={{ borderRadius: '10px' }} />
				<Box sx={{ position: 'absolute', right: 0 }}>
					<CornerTag text='1급지' />
				</Box>
			</Box>
			<Stack direction={'column'}>
				<Typography variant='label1' color='#767676'>
					N시간 전
				</Typography>
				<Box mt={'4px'} />
				<Typography
					variant='body1'
					fontWeight={'fontWeightMedium'}
					sx={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						display: '-webkit-box',
						WebkitLineClamp: '2',
						WebkitBoxOrient: 'vertical',
					}}
				>
					{title}
				</Typography>
				<Box mt={'8px'} />
				<Stack direction={'row'} gap={'4px'}>
					<BasicTag leftIcon={<LocationOnIcon sx={{ width: '10px', height: '10px' }} />} text='경기 성남시 분당구' />
					<BasicTag leftIcon={<CalendarTodayIcon sx={{ width: '10px', height: '10px' }} />} text='10.12(화)' />
				</Stack>
				<Box mt={'6px'} />
				<Stack direction={'row'} gap={'4px'}>
					<Typography variant='label1' color='info.main'>
						D-30
					</Typography>
					<Typography variant='label1' color='grey.500'>
						· 멤버 3/3명
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default ListItem;
