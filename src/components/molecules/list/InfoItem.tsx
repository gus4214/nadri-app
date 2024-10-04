import { Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface InfoItemProps {
	icon: ReactNode;
	label: string;
}

const InfoItem: FC<InfoItemProps> = ({ icon, label }) => {
	return (
		<Stack direction={'row'} gap={'12px'} alignItems={'center'}>
			{icon}
			<Typography variant='body2' color='#000'>
				{label}
			</Typography>
		</Stack>
	);
};

export default InfoItem;
