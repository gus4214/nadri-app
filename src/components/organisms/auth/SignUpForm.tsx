import AppButton from '@/src/components/atoms/buttons/AppButton';
import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import FormDatePicker from '@/src/components/molecules/form/FormDatePicker';
import FormMaxNumTag from '@/src/components/molecules/form/FormMaxNumTag';
import FormRadioBtnGroup from '@/src/components/molecules/form/FormRadioBtnGroup';
import FormTextField from '@/src/components/molecules/form/FormTextField';
import VerticalFormField from '@/src/components/molecules/form/VerticalFormField';
import { SignUpFormData } from '@/src/hooks/form/useSignUp.form';
import { Avatar, Box, Button, InputAdornment } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface SignUpFormProps {
	formHandler: UseFormReturn<SignUpFormData>;
	profileUrl?: string;
}

const SignUpForm: FC<SignUpFormProps> = ({ formHandler, profileUrl }) => {
	const {
		control,
		watch,
		formState: { isValid },
	} = formHandler;

	const memoValue = watch('CU_MEMO', '');
	const nicknameValue = watch('CU_NICKNAME', '');

	const nicknameCheckValid = nicknameValue.length >= 1 && nicknameValue.length <= 15;

	return (
		<MainContainer sx={{ pt: '24px', gap: '24px' }}>
			<Box display={'flex'} justifyContent={'center'}>
				<Avatar sx={{ width: '120px', height: '120px' }} src={profileUrl} />
			</Box>
			<VerticalFormField label='닉네임' required>
				<FormTextField
					control={control}
					name='CU_NICKNAME'
					inputProps={{
						placeholder: '닉네임',
						slotProps: {
							input: {
								endAdornment: (
									<InputAdornment position='end' sx={{ pb: '6px' }}>
										<Button variant='outlined' sx={{ height: '29px', borderRadius: '6px' }} disabled={!nicknameCheckValid}>
											중복확인
										</Button>
									</InputAdornment>
								),
							},
						},
					}}
				/>
			</VerticalFormField>
			<VerticalFormField label='생년월일' required>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<FormDatePicker control={control} name='CU_BIRTH' />
				</LocalizationProvider>
			</VerticalFormField>
			<VerticalFormField label='성별' required>
				<FormRadioBtnGroup
					control={control}
					name='CU_GENDER'
					options={[
						{ label: '남성', value: '남성' },
						{ label: '여성', value: '여성' },
					]}
				/>
			</VerticalFormField>
			<VerticalFormField label='한 줄 소개' required tag={<FormMaxNumTag typingValue={memoValue.length} maxNum={30} />}>
				<FormTextField control={control} name='CU_MEMO' inputProps={{ placeholder: '30자 이내로 자신을 소개해주세요.' }} />
			</VerticalFormField>
			<Box mt={'64px'} />
			<AppButton type='submit' size='large' disabled={!isValid}>
				시작하기
			</AppButton>
		</MainContainer>
	);
};

export default SignUpForm;
