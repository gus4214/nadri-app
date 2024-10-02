import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { BottomNavigationAction as MuiBottomNavigationAction, Container, BottomNavigation as MuiBottomNavigation, styled } from '@mui/material';
import { useState } from 'react';

const BottomNavBar = () => {
	const [value, setValue] = useState(0);
	return (
		<Container maxWidth={'tablet'} sx={{ position: 'fixed', bottom: 0, p: 0 }}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction label='커뮤니티' icon={<HomeOutlinedIcon />} />
				<BottomNavigationAction label='내정보' icon={<PersonOutlineOutlinedIcon />} />
			</BottomNavigation>
		</Container>
	);
};

export default BottomNavBar;

const BottomNavigation = styled(MuiBottomNavigation)(({ theme }) => ({
	height: '60px',
	borderTop: `1px solid ${theme.palette.grey[300]}`,
}));

const BottomNavigationAction = styled(MuiBottomNavigationAction)(({ theme }) => ({
	maxWidth: '100%',
	padding: 0,
}));
