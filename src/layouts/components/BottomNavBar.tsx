import BottomAddButton from '@/src/components/atoms/buttons/BottomAddButton';
import HomeIcon from '@/src/components/atoms/icons/HomeIcon';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Container, BottomNavigation as MuiBottomNavigation, BottomNavigationAction as MuiBottomNavigationAction, styled } from '@mui/material';
import { useState } from 'react';

const BottomNavBar = () => {
	const [value, setValue] = useState('community');

	return (
		<Container maxWidth={'tablet'} sx={{ position: 'fixed', bottom: 0, p: 0 }}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction value={'community'} label='커뮤니티' icon={<HomeIcon isSelected={value === 'community'} />} />
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
					<BottomAddButton />
				</Box>
				<BottomNavigationAction value={'profile'} label='내정보' icon={value === 'profile' ? <PersonIcon /> : <PersonOutlineIcon />} />
			</BottomNavigation>
		</Container>
	);
};

export default BottomNavBar;

const BottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({
	position: 'relative',
	height: '60px',
	borderTop: `1px solid ${theme.palette.grey[300]}`,
}));

const BottomNavigationAction = styled(MuiBottomNavigationAction)(({ theme }) => ({
	fontSize: `${theme.typography.label1}`,
	color: `${theme.palette.grey[500]}`,
	maxWidth: '100%',
	padding: 0,
	'&.Mui-selected': {
		color: 'black',
		'.MuiSvgIcon-root': {},
	},
}));
