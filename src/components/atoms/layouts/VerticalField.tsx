import { Stack, SxProps, Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface VerticalFieldProps {
	label: string;
	children?: ReactNode;
	sx?: SxProps;
}

const VerticalField: FC<VerticalFieldProps> = ({ label, children, ...sx }) => {
	return (
		<Stack direction={'column'} gap={'12px'} {...sx}>
			<Typography variant='button' fontWeight={'fontWeightBold'}>
				{label}
			</Typography>
			{children}
		</Stack>
	);
};

export default VerticalField;
