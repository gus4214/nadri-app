import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface DescriptionBoxProps {
	description: string;
}

const DescriptionBox: FC<DescriptionBoxProps> = ({ description }) => {
	return (
		<Box sx={{ p: '12px 20px', borderRadius: '6px', backgroundColor: 'grey.100' }}>
			<Typography variant='body2'>{description}</Typography>
		</Box>
	);
};

export default DescriptionBox;
