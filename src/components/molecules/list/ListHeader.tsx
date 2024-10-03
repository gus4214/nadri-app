import { Stack, SxProps, Typography } from '@mui/material';
import { FC } from 'react';

interface ListHeaderProps {
	title: string;
	sx?: SxProps;
}

const ListHeader: FC<ListHeaderProps> = ({ title, sx }) => {
	return (
		<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} component={'header'} pb={'16px'} sx={{ ...sx }}>
			<Typography variant='button' fontWeight={'fontWeightBold'}>
				{title}
			</Typography>
			<Typography variant={'label1'} color={'grey.500'} sx={{ cursor: 'pointer' }}>
				{`더보기 >`}
			</Typography>
		</Stack>
	);
};

export default ListHeader;
