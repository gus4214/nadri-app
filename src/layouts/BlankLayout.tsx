import { ReactNode } from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';

interface BlankLayoutProps {
	children: ReactNode;
}

const BlankLayout = ({ children }: BlankLayoutProps) => {
	return (
		<BlankLayoutWrapper>
			<ContentWrapper sx={{ bgcolor: 'white' }}>
				<Box
					component={'main'}
					sx={{ bgcolor: 'white', display: 'flex', flexDirection: 'column', paddingTop: '56px', paddingBottom: '66px', height: '100%' }}
				>
					{children}
				</Box>
			</ContentWrapper>
		</BlankLayoutWrapper>
	);
};

export default BlankLayout;

const BlankLayoutWrapper = styled(Box)(() => ({
	position: 'relative',
	width: '100%',
	height: '100svh',
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	margin: '0 auto',
	width: '100%',
	maxWidth: `${theme.breakpoints.values.tablet}px`,
	height: '100%',
}));
