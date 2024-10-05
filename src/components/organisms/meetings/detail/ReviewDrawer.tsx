import AppButton from '@/src/components/atoms/buttons/AppButton';
import ReviewTag from '@/src/components/molecules/display/ReviewTag';
import FormMaxNumTag from '@/src/components/molecules/form/FormMaxNumTag';
import FormTextArea from '@/src/components/molecules/form/FormTextArea';
import { Box, Drawer, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ReviewDrawerProps {
	open?: boolean;
	onClose: () => void;
}

const schema = yup.object().shape({
	good: yup.string().min(10, '10자 이상으로 작성해주세요.').max(100, '100자 이하로 작성해주세요.'),
	bad: yup.string().min(10, '10자 이상으로 작성해주세요.').max(100, '100자 이하로 작성해주세요.'),
});

const ReviewDrawer: FC<ReviewDrawerProps> = ({ open, onClose }) => {
	const formHandler = useForm({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			good: '',
			bad: '',
		},
	});

	const { control, watch, clearErrors, reset } = formHandler;

	const goodValue = watch('good', '');
	const badValue = watch('bad', '');

	const handleClose = () => {
		onClose();
		reset();
		clearErrors();
	};

	return (
		<Drawer
			anchor='bottom'
			open={open}
			onClose={handleClose}
			sx={{
				'& .MuiDrawer-paper': {
					maxWidth: '600px',
					margin: '0 auto',
					marginBottom: 'auto',
					borderRadius: '20px 20px 0px 0px',
				},
			}}
		>
			<Box role='presentation' display={'flex'} flexDirection={'column'} gap={'44px'} sx={{ p: '20px' }}>
				<Stack direction={'column'} gap={'24px'}>
					<Stack direction={'column'} gap={'12px'}>
						<Typography variant='h2' fontWeight={'fontWeightBold'}>
							이번 임장은 어떠셨나요? <br />
							좋았던, 아쉬웠던 점을 알려주세요.
						</Typography>
						<Typography variant='body1'>
							작성해주신 후기는 익명으로 기록되며, 완료된 모임
							<br /> 상세 페이지에서 누구나 리뷰를 볼 수 있어요.
						</Typography>
					</Stack>
				</Stack>
				<Box display={'flex'} flexDirection={'column'} gap={'24px'}>
					<Stack direction={'column'} gap={'8px'}>
						<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
							<ReviewTag />
							<FormMaxNumTag typingValue={goodValue?.length} maxNum={100} />
						</Stack>
						<FormTextArea
							control={control}
							name='good'
							inputProps={{
								placeholder: `100자 이내의 글을 입력해주세요. \n(민감한 개인 정보는 기록하지 않도록 주의해주세요.)`,
								multiline: true,
								rows: 2,
								sx: {
									borderRadius: '6px',
									'& .MuiInputBase-root': {
										borderRadius: '6px',
										backgroundColor: 'grey.100',
									},
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: 'grey.100',
									},
								},
							}}
						/>
					</Stack>
					<Stack direction={'column'} gap={'8px'}>
						<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
							<ReviewTag status='bad' />
							<FormMaxNumTag typingValue={badValue?.length} maxNum={100} />
						</Stack>
						<FormTextArea
							control={control}
							name='bad'
							inputProps={{
								placeholder: `100자 이내의 글을 입력해주세요. \n(민감한 개인 정보는 기록하지 않도록 주의해주세요.)`,
								multiline: true,
								rows: 2,
								sx: {
									borderRadius: '6px',
									'& .MuiInputBase-root': {
										borderRadius: '6px',
										backgroundColor: 'grey.100',
									},
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: 'grey.100',
									},
								},
							}}
						/>
					</Stack>
				</Box>
				<AppButton size='large' disabled>
					서비스 준비중이에요
				</AppButton>
			</Box>
		</Drawer>
	);
};

export default ReviewDrawer;
