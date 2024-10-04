import LogoIcon from '@/src/components/atoms/icons/LogoIcon';
import LogoTextIcon from '@/src/components/atoms/icons/LogoTextIcon';
import { Box } from '@mui/material';
import Link from 'next/link';

const MainNavBar = () => {
	return (
		<Box px={'20px'} py={'16px'} sx={{ position: 'fixed', top: 0, bgcolor: 'white', width: '600px', zIndex: 10 }}>
			<Link href={'/'}>
				<Box display={'flex'} gap={'8px'} sx={{ cursor: 'pointer' }}>
					<LogoIcon />
					<LogoTextIcon sx={{ width: '66px' }} />
				</Box>
			</Link>
		</Box>
	);
};

export default MainNavBar;
