import { dateFormat } from '@/src/utils/dateTime';
import { styled } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';

export interface FormDatePickersProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>
	extends UseControllerProps<TFieldValues, TName> {}

const FormDatePicker = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	...props
}: FormDatePickersProps<TFieldValues, TName>) => {
	const {
		field: { value, onChange, ref },
		fieldState: { error },
	} = useController(props);

	return <StyledDatePicker onChange={onChange} ref={ref} format={dateFormat} value={value} />;
};

export default FormDatePicker;

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
	'& .MuiInputBase-root': {
		borderRadius: '6px',
		height: '37px',
	},
}));
