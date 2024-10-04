import { Typography } from '@mui/material';
import { FC } from 'react';

interface UnderlineTextButtonProps {
	buttonText: string;
	onClick?: () => void;
}

const UnderlineTextButton: FC<UnderlineTextButtonProps> = ({ buttonText, onClick }) => {
	return (
		<Typography
			variant='body2'
			fontWeight={'fontWeightMedium'}
			color='grey.500'
			sx={{ textDecoration: 'underline', cursor: 'pointer' }}
			onClick={onClick}
		>
			{buttonText}
		</Typography>
	);
};

export default UnderlineTextButton;
