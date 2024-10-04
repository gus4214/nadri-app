import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface SignUpFormData {
	CU_NICKNAME: string;
	CU_BIRTH: Date;
	CU_GENDER: string;
	CU_MEMO: string;
}

const schema = yup.object().shape({
	CU_NICKNAME: yup.string().required('닉네임을 작성해주세요.').max(15, '15자 이내로 작성해주세요.'),
	CU_BIRTH: yup.date().typeError('유효한 생년월일을 선택해주세요.').required('생년월일을 작성해주세요.'),
	CU_GENDER: yup.string().required('성별을 선택해주세요.'),
	CU_MEMO: yup.string().required('한 줄 소개를 작성해주세요.').max(30, '30자 이내로 작성해주세요.'),
});

const useSignUpForm = (defaultValue?: Partial<SignUpFormData>) => {
	const { CU_NICKNAME, CU_BIRTH, CU_GENDER, CU_MEMO } = defaultValue as SignUpFormData;

	const formHandler = useForm<SignUpFormData>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			CU_NICKNAME: CU_NICKNAME || '',
			CU_BIRTH: CU_BIRTH || undefined,
			CU_GENDER: CU_GENDER || '남성',
			CU_MEMO: CU_MEMO ||'',
		},
	});

	return {
		formHandler,
	};
};

export default useSignUpForm;
