import BuildingIcon from '@/src/components/atoms/icons/BuildingIcon';
import MapPinIcon from '@/src/components/atoms/icons/MapPinIcon';
import FormSelect from '@/src/components/molecules/form/FormSelect';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

const feedMenuItems = [
	{ label: '급지전체', value: 'all' },
	{ label: '1급지', value: 'one' },
	{ label: '2급지', value: 'two' },
	{ label: '3급지', value: 'three' },
	{ label: '4급지', value: 'four' },
	{ label: '5급지', value: 'five' },
];

const locationMenuItems = [
	{ label: '서울·경기 전체', value: 'all' },
	{ label: '서울', value: 's' },
	{ label: '경기', value: 'k' },
];

const MeetingFilterGroup = () => {
	const formHandler = useForm({
		defaultValues: {
			feed: 'all',
			location: 'all',
		},
	});
	const { control } = formHandler;
	return (
		<Stack direction={'row'} gap={'10px'}>
			<FormSelect menuItems={feedMenuItems} control={control} name='feed' inputProps={{ startAdornment: <BuildingIcon /> }} />
			<FormSelect menuItems={locationMenuItems} control={control} name='location' inputProps={{ startAdornment: <MapPinIcon /> }} />
		</Stack>
	);
};

export default MeetingFilterGroup;
