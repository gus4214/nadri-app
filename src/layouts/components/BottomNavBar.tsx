import BottomAddButton from '@/src/components/atoms/buttons/BottomAddButton';
import HomeIcon from '@/src/components/atoms/icons/HomeIcon';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Container, BottomNavigation as MuiBottomNavigation, BottomNavigationAction as MuiBottomNavigationAction, styled } from '@mui/material';
import { useRouter } from 'next/router';

const BottomNavBar: React.FC = () => {
	const router = useRouter();
	const currentPath = router.pathname;

	const getValueFromPath = (path: string): string => {
		if (path === '/') return 'community';
		if (path === '/profile') return 'profile';
		return '';
	};

	const value = getValueFromPath(currentPath);

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		if (newValue === 'community') {
			router.push('/');
		} else if (newValue === 'profile') {
			router.push('/profile');
		}
	};

	const handleAddClick = () => {
		router.push('/meeting/register');
	};

	return (
		<Container maxWidth='tablet' sx={{ position: 'fixed', bottom: 0, p: 0, width: '100%', zIndex: 1000 }}>
			<BottomNavigation showLabels value={value} onChange={handleChange}>
				{/* 커뮤니티 탭 */}
				<BottomNavigationAction value='community' label='커뮤니티' icon={<HomeIcon isSelected={value === 'community'} />} />
				{/* 중앙의 Add 버튼 */}
				<Box display='flex' justifyContent='center' alignItems='center'>
					<BottomAddButton onClick={handleAddClick} />
				</Box>
				{/* 내정보 탭 */}
				<BottomNavigationAction value='profile' label='내정보' icon={value === 'profile' ? <PersonIcon /> : <PersonOutlineIcon />} />
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
	},
}));
