import { TControl } from '@/src/types/form.d';
import { TextField, TextFieldProps } from '@mui/material';
import { ChangeEvent } from 'react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

interface FormTextFieldProp<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends TControl<TFieldValues, TName> {
	inputProps?: TextFieldProps;
}

const FormTextField = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	inputProps,
	...props
}: FormTextFieldProp<TFieldValues, TName>) => {
	const {
		field: { value, onChange, onBlur, ref },
		fieldState: { error },
	} = useController(props);

	return (
		<TextField
			variant='standard'
			value={value}
			onChange={(e: ChangeEvent<HTMLInputElement>) => {
				onChange(e);
				inputProps?.onChange && inputProps?.onChange(e);
			}}
			onBlur={onBlur}
			ref={ref}
			{...inputProps}
			error={inputProps?.error || !!error}
			helperText={inputProps?.helperText || (!!error && error.message)}
		/>
	);
};
export default FormTextField;
