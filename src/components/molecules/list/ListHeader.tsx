import { Stack, SxProps, Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

interface ListHeaderProps {
	title: string;
	href: string;
	sx?: SxProps;
}

const ListHeader: FC<ListHeaderProps> = ({ title, href, sx }) => {
	return (
		<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} component={'header'} pb={'16px'} sx={{ ...sx }}>
			<Typography variant='button' fontWeight={'fontWeightBold'}>
				{title}
			</Typography>
			<Link href={href}>
				<Typography variant={'label1'} color={'grey.500'} sx={{ cursor: 'pointer' }}>
					{`더보기 >`}
				</Typography>
			</Link>
		</Stack>
	);
};

export default ListHeader;
