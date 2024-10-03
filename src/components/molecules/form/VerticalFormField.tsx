import { Box, Stack, SxProps, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface VerticalFormFieldProps {
	label: string;
	subLabel?: string;
	tag?: ReactNode;
	required?: boolean;
	children?: ReactNode;
	sx?: SxProps;
}

const VerticalFormField: FC<VerticalFormFieldProps> = ({ label, subLabel, required, tag, children, ...sx }) => {
	return (
		<Stack direction={'column'} gap={'12px'} {...sx}>
			<Box>
				<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
					<Stack direction={'row'} gap={'4px'}>
						<Typography variant='body1' fontWeight={'fontWeightMedium'}>
							{label}
						</Typography>
						{required && (
							<Typography variant='body1' fontWeight={'fontWeightMedium'} color='primary.main'>
								*
							</Typography>
						)}
					</Stack>
					{tag}
				</Stack>
				{subLabel && (
					<Typography variant='body2' color='grey.500' pt={'6px'}>
						{subLabel}
					</Typography>
				)}
			</Box>
			{children}
		</Stack>
	);
};

export default VerticalFormField;
