import AppButton from '@/src/components/atoms/buttons/AppButton';
import BottomFixedContainer from '@/src/components/atoms/layouts/BottomFixedContainer';
import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import FormDatePicker from '@/src/components/molecules/form/FormDatePicker';
import FormImageUpload from '@/src/components/molecules/form/FormImageUpload';
import FormMaxNumTag from '@/src/components/molecules/form/FormMaxNumTag';
import FormSelect from '@/src/components/molecules/form/FormSelect';
import FormTextArea from '@/src/components/molecules/form/FormTextArea';
import FormTextField from '@/src/components/molecules/form/FormTextField';
import VerticalFormField from '@/src/components/molecules/form/VerticalFormField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Divider, Stack } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface MeetingRegisterFormData {
	title: string;
	link: string;
	city: string;
	town: string;
	supply: string;
	startDate?: Dayjs;
	companions: number;
	description: string;
	thumbnail?: File[] | null;
}

const schema = yup.object().shape({
	title: yup.string().required('제목을 작성해주세요.').max(20, '20자 이하로 작성해주세요.'),
	link: yup.string().required('링크를 작성해주세요.'),
	city: yup.string().required(),
	town: yup.string().required(),
	supply: yup.string().required(),
	companions: yup
		.number()
		.typeError('동행 인원을 숫자로 작성해주세요.')
		.min(2, '2명 이상이어야 합니다.')
		.max(10, '10명 이하로 작성해주세요.')
		.required('동행 인원을 작성해주세요.'),
	description: yup.string().required('상세 설명을 작성해주세요.').min(20, '20자 이상으로 작성해주세요.').max(1000, '1000자 이하로 작성해주세요.'),
});

const cityMenuItems = [
	{ label: '시/도', value: 'all' },
	{ label: '서울 특별시', value: 's' },
	{ label: '경기도', value: 'k' },
];

const townMenuItems = [
	{ label: '시/군/구', value: 'all' },
	{ label: '서울 특별시', value: 's' },
	{ label: '경기도', value: 'k' },
];

const supplyMenuItems = [
	{ label: '급지를 선택해주세요.', value: 'all' },
	{ label: '1급지', value: 'one' },
	{ label: '2급지', value: 'two' },
	{ label: '3급지', value: 'three' },
	{ label: '4급지', value: 'four' },
	{ label: '5급지', value: 'five' },
];

const MeetingRegisterForm = () => {
	const formHandler = useForm<MeetingRegisterFormData>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			title: '',
			link: '',
			city: 'all',
			town: 'all',
			supply: 'one',
			startDate: dayjs(),
			companions: 2,
			description: '',
			thumbnail: null,
		},
	});

	const { control, watch } = formHandler;

	const titleValue = watch('title', '');
	const descriptionValue = watch('description', '');

	return (
		<>
			<MainContainer sx={{ pt: '24px', gap: '24px' }}>
				{/* 제목 */}
				<VerticalFormField label='제목' tag={<FormMaxNumTag typingValue={titleValue.length} maxNum={20} />} required>
					<FormTextField control={control} name='title' inputProps={{ placeholder: '예 : 주말 00아파트 임장 보러 다니실 분!' }} />
				</VerticalFormField>
				{/* 모임 채팅방 링크 */}
				<VerticalFormField label='모임 채팅방 링크' required sx={{ pb: '14px' }}>
					<FormTextField control={control} name='link' inputProps={{ placeholder: 'https://open.kakao.com/@@@' }} />
				</VerticalFormField>
			</MainContainer>
			<Divider sx={{ my: '24px', color: 'grey.500', borderBottomWidth: '6px' }} />
			<MainContainer sx={{ gap: '24px', pb: '26px', height: '100%' }}>
				{/* 지역 선택 셀렉트 */}
				<VerticalFormField label='지역 선택' required>
					<Stack direction={'row'} gap={'6px'}>
						<FormSelect control={control} name='city' menuItems={cityMenuItems} />
						<FormSelect control={control} name='town' menuItems={townMenuItems} />
					</Stack>
				</VerticalFormField>
				{/* 급지 선택 */}
				<VerticalFormField label='급지 선택' required>
					<FormSelect control={control} name='supply' menuItems={supplyMenuItems} />
				</VerticalFormField>
				{/* 모임 일정 선택 */}
				<VerticalFormField label='모임 일정 선택' required>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<FormDatePicker control={control} name='startDate' />
					</LocalizationProvider>
				</VerticalFormField>
				{/* 동행 인원 */}
				<VerticalFormField label='동행 인원' required>
					<FormTextField control={control} name='companions' inputProps={{ placeholder: '2명부터 10명 이내로 숫자만 입력 가능해요.' }} />
				</VerticalFormField>
				{/* 상세 설명 */}
				<VerticalFormField label='상세 설명' required tag={<FormMaxNumTag typingValue={descriptionValue.length} maxNum={1000} />}>
					<FormTextArea
						control={control}
						name='description'
						inputProps={{
							placeholder: '20자 이상 1000자 이내의 설명을 입력해주세요. \r(Tip : 구체적인 모임 시간, 장소 등의 정보를 적어주면 좋아요.)',
							multiline: true,
							rows: 4,
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
				</VerticalFormField>
				{/* 썸네일 등록 */}
				<VerticalFormField label='게시글 썸네일 이미지' required subLabel='미첨부시 기본 이미지로 게시글이 등록돼요.'>
					<FormImageUpload name={'thumbnail'} width={100} height={100} {...formHandler} />
				</VerticalFormField>
			</MainContainer>
			<BottomFixedContainer>
				<AppButton size='large'>게시글 등록하기</AppButton>
			</BottomFixedContainer>
		</>
	);
};

export default MeetingRegisterForm;
