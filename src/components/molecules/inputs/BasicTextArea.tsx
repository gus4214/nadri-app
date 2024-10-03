import { TextField, TextFieldProps, TextFieldVariants, styled } from '@mui/material';
import { forwardRef } from 'react';

export interface BasicTextAreaProps extends Omit<TextFieldProps, TextFieldVariants> {
	variant?: TextFieldVariants;
}

const BasicTextArea = forwardRef<HTMLDivElement, BasicTextAreaProps>(({ variant, ...props }, ref) => {
	return <StyledTextField multiline minRows={4} variant={variant} ref={ref} {...props} />;
});

BasicTextArea.displayName = 'BasicTextArea';

export default BasicTextArea;

const StyledTextField = styled(TextField)(() => ({
	height: '100%',
	'& .MuiInputBase-root': {
		borderRadius: '12px',
		backgroundColor: 'black',
	},
	'& .MuiOutlinedInput-notchedOutline': {
		borderColor: 'red',
	},
}));
