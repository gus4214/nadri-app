import { Box, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface BasicTagProps {
	leftIcon?: ReactNode;
	text: string;
}

const BasicTag: FC<BasicTagProps> = ({ leftIcon, text }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '4px',
				padding: '2px 4px',
				borderRadius: '4px',
				backgroundColor: 'grey.300',
				height: '16px',
			}}
		>
			{leftIcon && leftIcon}
			<Typography variant='label2'>{text}</Typography>
		</Box>
	);
};

export default BasicTag;
