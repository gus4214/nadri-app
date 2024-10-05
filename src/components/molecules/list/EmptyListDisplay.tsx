import LogoEmptyDataIcon from '@/src/components/atoms/icons/LogoEmptyDataICon';
import { Box, Stack, SxProps, Typography } from '@mui/material';
import { FC } from 'react';

interface EmptyListDisplayProps {
	text?: string;
	sx?: SxProps;
}

const EmptyListDisplay: FC<EmptyListDisplayProps> = ({ text, ...sx }) => {
	return (
		<Box display={'flex'} justifyContent={'center'} {...sx}>
			<Stack direction={'column'} gap={'12px'} alignItems={'center'}>
				<LogoEmptyDataIcon sx={{ width: '100px', height: '100px' }} />
				<Typography variant='button' fontWeight={'fontWeightBold'} color='grey.500'>
					{text}
				</Typography>
			</Stack>
		</Box>
	);
};

export default EmptyListDisplay;
