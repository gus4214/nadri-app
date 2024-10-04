import { Stack, SxProps, Typography } from '@mui/material';
import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

interface ListHeaderProps {
	title: string;
	sx?: SxProps;
	onClick: () => void;
}

const ListHeader: FC<ListHeaderProps> = ({ title, sx, onClick }) => {
	return (
		<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} component={'header'} pb={'16px'} sx={{ ...sx }}>
			<Typography variant='button' fontWeight={'fontWeightBold'}>
				{title}
			</Typography>
			<Typography variant={'label1'} color={'grey.500'} sx={{ cursor: 'pointer' }} onClick={onClick}>
				{`더보기 >`}
			</Typography>
		</Stack>
	);
};

export default ListHeader;
