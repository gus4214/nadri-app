import { styled, TextField, TextFieldProps } from '@mui/material';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';

interface FormTextAreaProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>
	extends UseControllerProps<TFieldValues, TName> {
	inputProps?: TextFieldProps;
}

const FormTextArea = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	inputProps,
	...props
}: FormTextAreaProps<TFieldValues, TName>) => {
	const {
		field: { value, onChange, onBlur, ref },
		fieldState: { error },
	} = useController(props);
	return (
		<TextField
			value={value}
			onBlur={onBlur}
			ref={ref}
			onChange={onChange}
			error={Boolean(error)}
			helperText={!!error && error.message}
			{...inputProps}
		/>
	);
};

export default FormTextArea;

const CustomTextField = styled(TextField)(() => ({
	'&. MuiOutlinedInput-root': {
		height: '92px',
		borderRadius: '6px !important',
		backgroundColor: 'red',
	},
}));
