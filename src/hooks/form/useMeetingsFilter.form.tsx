import { useForm } from 'react-hook-form';

export interface MeetingsFilterParams {
	BD_RATE: number | string;
	BD_REGION: string;
}

const useMeetingsFilter = () => {
	const formHandler = useForm<MeetingsFilterParams>({
		defaultValues: {
			BD_RATE: 'all',
			BD_REGION: 'all',
		},
	});

	const { watch } = formHandler;
	const BD_RATE = watch('BD_RATE') === 'all' ? '' : watch('BD_RATE');
	const BD_REGION = watch('BD_REGION') === 'all' ? '' : watch('BD_REGION');

	return {
		formHandler, BD_RATE, BD_REGION
	};
};

export default useMeetingsFilter;
