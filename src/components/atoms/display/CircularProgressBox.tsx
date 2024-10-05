import { Box, BoxProps, CircularProgress } from '@mui/material';
import { FC } from 'react';

const CircularProgressBox: FC<BoxProps> = ({ ...props }) => {
	return (
		<Box display={'flex'} justifyContent={'center'} alignItems={'center'} {...props}>
			<CircularProgress />
		</Box>
	);
};

export default CircularProgressBox;
