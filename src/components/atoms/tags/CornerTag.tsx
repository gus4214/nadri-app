import { Box, Typography } from '@mui/material';
import { FC } from 'react';

interface CornerTagProps {
	text: string;
}

const CornerTag: FC<CornerTagProps> = ({ text }) => {
	return (
		<Box sx={{ padding: '4px 6px', textAlign: 'center', borderRadius: '0px 10px', backgroundColor: 'primary.light' }}>
			<Typography variant='label1' color='primary.main'>
				{text}
			</Typography>
		</Box>
	);
};

export default CornerTag;
