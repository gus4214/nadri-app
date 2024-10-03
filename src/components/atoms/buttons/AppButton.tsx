import { Button, ButtonProps, Typography, TypographyVariant } from '@mui/material';
import { FC, ReactNode } from 'react';

interface AppButtonProps extends ButtonProps {
	size?: 'large' | 'medium' | 'small';
	children?: ReactNode;
}

const AppButton: FC<AppButtonProps> = ({ children, size = 'medium', ...props }) => {
	const styleMap = {
		large: { height: '52px', typeScale: 'button', fontWeight: 'fontWeightBold' },
		medium: { height: '40px', typeScale: 'body2', fontWeight: 'fontWeightMedium' },
		small: { height: '32px', typeScale: 'label1', fontWeight: 'fontWeightMedium' },
	};

	const typoMap = {};

	return (
		<Button variant='contained' sx={{ height: styleMap[size].height, boxShadow: 'none', borderRadius: '6px' }} {...props}>
			<Typography color='white' variant={styleMap[size].typeScale as TypographyVariant} fontWeight={styleMap[size].fontWeight}>
				{children}
			</Typography>
		</Button>
	);
};

export default AppButton;
