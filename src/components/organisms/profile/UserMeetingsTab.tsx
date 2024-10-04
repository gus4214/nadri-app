import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import SampleMeetings from '@/src/components/organisms/SampleMeetings';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div role='tabpanel' hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
			{value === index && <MainContainer sx={{ py: '20px' }}>{children}</MainContainer>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const UserMeetingsTab = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} variant='fullWidth' aria-label='meetings tab'>
					<Tab label='만든 임장' {...a11yProps(0)} />
					<Tab label='참여한 임장' {...a11yProps(1)} />
				</Tabs>
			</Box>
			<CustomTabPanel value={value} index={0}>
				<SampleMeetings />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<Box py={'20px'}>
					<Typography variant='body1' color='grey.500' align='center'>
						참여한 임장이 아직 없어요. 😢
					</Typography>
				</Box>
			</CustomTabPanel>
		</Box>
	);
};

export default UserMeetingsTab;
