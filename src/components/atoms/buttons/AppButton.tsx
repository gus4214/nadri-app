import { Button, ButtonProps, Typography, TypographyVariant } from '@mui/material';
import { FC, ReactNode } from 'react';

interface AppButtonProps extends ButtonProps {
	size?: 'large' | 'medium' | 'small';
	grey?: boolean;
	children?: ReactNode;
}

const AppButton: FC<AppButtonProps> = ({ children, size = 'medium', grey, ...props }) => {
	const styleMap = {
		large: { height: '52px', typeScale: 'button', fontWeight: 'fontWeightBold' },
		medium: { height: '40px', typeScale: 'body2', fontWeight: 'fontWeightMedium' },
		small: { height: '32px', typeScale: 'label1', fontWeight: 'fontWeightMedium' },
	};

	const bgColor = grey ? '#EAEBEE' : 'primary.main';
	const textColor = grey ? '#9A9A9A' : 'white';

	return (
		<Button variant='contained' sx={{ height: styleMap[size].height, boxShadow: 'none', borderRadius: '6px', backgroundColor: bgColor }} {...props}>
			<Typography color={textColor} variant={styleMap[size].typeScale as TypographyVariant} fontWeight={styleMap[size].fontWeight}>
				{children}
			</Typography>
		</Button>
	);
};

export default AppButton;
