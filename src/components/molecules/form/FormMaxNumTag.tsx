import { Typography } from '@mui/material';
import React, { FC } from 'react';

interface FormMaxNumTagProps {
	typingValue: number;
	maxNum: number;
}

const FormMaxNumTag: FC<FormMaxNumTagProps> = ({ typingValue, maxNum }) => {
	return (
		<Typography variant='label1' color={typingValue > maxNum ? 'error.light' : 'grey.500'}>
			{typingValue}/{maxNum}
		</Typography>
	);
};

export default FormMaxNumTag;
