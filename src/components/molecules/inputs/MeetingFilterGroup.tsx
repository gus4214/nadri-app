import BuildingIcon from '@/src/components/atoms/icons/BuildingIcon';
import MapPinIcon from '@/src/components/atoms/icons/MapPinIcon';
import FormSelect from '@/src/components/molecules/form/FormSelect';
import { MeetingsFilterParams } from '@/src/hooks/form/useMeetingsFilter.form';
import { Stack } from '@mui/material';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface MeetingFilterGroupProps {
	formHandler: UseFormReturn<MeetingsFilterParams>;
}

const feedMenuItems = [
	{ label: '급지전체', value: 'all' },
	{ label: '1급지', value: 1 },
	{ label: '2급지', value: 2 },
	{ label: '3급지', value: 3 },
	{ label: '4급지', value: 4 },
	{ label: '5급지', value: 5 },
];

const locationMenuItems = [
	{ label: '서울·경기 전체', value: 'all' },
	{ label: '서울', value: '서울' },
	{ label: '경기', value: '경기' },
];

const MeetingFilterGroup: FC<MeetingFilterGroupProps> = ({ formHandler: { control } }) => {
	return (
		<Stack direction={'row'} gap={'10px'}>
			<FormSelect menuItems={feedMenuItems} control={control} name='BD_RATE' inputProps={{ startAdornment: <BuildingIcon /> }} />
			<FormSelect menuItems={locationMenuItems} control={control} name='BD_REGION' inputProps={{ startAdornment: <MapPinIcon /> }} />
		</Stack>
	);
};

export default MeetingFilterGroup;
