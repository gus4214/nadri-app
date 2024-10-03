import { FormControl, MenuItem, Select, SelectProps, styled, Typography } from '@mui/material';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';

export interface MenuItemsProps {
	label: string;
	value: string | number;
}

interface FormSelectProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>
	extends UseControllerProps<TFieldValues, TName> {
	inputProps?: SelectProps;
	menuItems: MenuItemsProps[];
}

const FormSelect = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	inputProps,
	menuItems,
	...props
}: FormSelectProps<TFieldValues, TName>) => {
	const {
		field: { value, onChange, onBlur, ref },
		fieldState: { error },
	} = useController(props);

	return (
		<FormControl fullWidth>
			<CustomSelect
				value={value}
				onChange={(event, child) => {
					onChange(event);
					inputProps?.onChange && inputProps.onChange(event, child);
				}}
				onBlur={onBlur}
				ref={ref}
				error={Boolean(error)}
				{...inputProps}
			>
				{!!menuItems && menuItems.length ? (
					menuItems.map((menuItem, index) => (
						<MenuItem key={index} value={menuItem.value} sx={{ minHeight: '32px' }}>
							<Typography variant='label1'>{menuItem.label}</Typography>
						</MenuItem>
					))
				) : (
					<MenuItem key={'empty'} value={''}>
						없음
					</MenuItem>
				)}
			</CustomSelect>
		</FormControl>
	);
};

export default FormSelect;

const CustomSelect = styled(Select)(({ theme }) => ({
	height: '32px',
	padding: '8px 10px',
	borderRadius: '8px',
	color: `${theme.palette.grey[500]}`,
	'.MuiSelect-select': { padding: 0 },
	'.MuiOutlinedInput-notchedOutline': { border: `0.5px solid ${theme.palette.grey[500]}` },
}));
