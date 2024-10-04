// FormRadioBtnGroup.tsx
import AppButton from '@/src/components/atoms/buttons/AppButton';
import { TControl } from '@/src/types/form.d'; // 실제 경로에 맞게 수정하세요
import { Box, Button, FormHelperText, Stack } from '@mui/material';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

interface FormRadioBtnGroupProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends TControl<TFieldValues, TName> {
	options: { label: string; value: string }[];
}

const FormRadioBtnGroup = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
	options,
	...props
}: FormRadioBtnGroupProps<TFieldValues, TName>) => {
	const {
		field: { value, onChange, onBlur, ref },
		fieldState: { error },
	} = useController(props);

	return (
		<Box>
			<Stack direction={'row'} gap={'8px'} aria-label='gender select' sx={{ mb: error ? 1 : 2 }}>
				{options.map((option) => (
					<AppButton
						size='small'
						key={option.value}
						// variant={value === option.value ? 'contained' : 'outlined'}
						grey={value !== option.value}
						onClick={() => onChange(option.value)}
					>
						{option.label}
					</AppButton>
				))}
			</Stack>
			{error && <FormHelperText error>{error.message}</FormHelperText>}
		</Box>
	);
};

export default FormRadioBtnGroup;
