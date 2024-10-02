import { Box } from '@mui/material';

const BottomNavBar = () => {
	return (
		<Box sx={{ position: 'fixed', bottom: 0, width: '600px' }}>
			<Box
				display={'flex'}
				alignItems={'center'}
				justifyContent={'space-between'}
				height={'60px'}
				bgcolor={'var(--white-100, #FFF)'}
				borderTop={'0.5px solid var(--Gray-300, #EAEBEE)'}
			></Box>
		</Box>
	);
};

export default BottomNavBar;
