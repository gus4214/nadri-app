import LogoIcon from '@/src/components/atoms/icons/LogoIcon';
import LogoTextIcon from '@/src/components/atoms/icons/LogoTextIcon';
import { Box, Container } from '@mui/material';

const MainNavBar = () => {
	return (
		<Box px={'20px'} py={'16px'} sx={{ position: 'fixed', top: 0, bgcolor: 'white', width: '600px', zIndex: 10 }}>
			<Box display={'flex'} gap={'8px'} sx={{ cursor: 'pointer' }}>
				<LogoIcon />
				<LogoTextIcon sx={{ width: '66px' }} />
			</Box>
		</Box>
	);
};

export default MainNavBar;
