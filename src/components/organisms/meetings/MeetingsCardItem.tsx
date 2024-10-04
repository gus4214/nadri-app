import BasicTag from '@/src/components/atoms/tags/BasicTag';
import { GetMeetingsItem } from '@/src/fetchers/meetings';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

interface MeetingsCardItemProps {
	meetingsItem: GetMeetingsItem;
	onClick?: () => void;
}

const MeetingsCardItem: FC<MeetingsCardItemProps> = ({ meetingsItem, onClick }) => {
	const { BD_TITLE, BD_RATE, BD_IMG } = meetingsItem;

	return (
		<Box sx={{ position: 'relative', width: '170px', height: '170px', aspectRatio: '1/1', cursor: 'pointer' }}>
			<Image src={BD_IMG} alt='meeting' fill objectFit='cover' objectPosition='center' style={{ borderRadius: '10px', filter: 'brightness(70%)' }} />
			<Box sx={{ position: 'absolute', height: '100%' }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', p: '16px', height: '100%' }}>
					<Stack direction={'column'} gap={'10px'}>
						<Stack direction={'row'} gap={'4px'}>
							<BasicTag text={`${BD_RATE}급지`} />
							<BasicTag text='경기 성남시' />
						</Stack>
						<Typography
							variant='body1'
							fontWeight={'fontWeightMedium'}
							color='white'
							sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}
						>
							{BD_TITLE}
						</Typography>
					</Stack>
					<Box display={'flex'} flex={1} />
					<Stack direction={'row'} gap={'12px'}>
						<Typography variant='label1' color='white'>
							리뷰 3개
						</Typography>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};

export default MeetingsCardItem;
