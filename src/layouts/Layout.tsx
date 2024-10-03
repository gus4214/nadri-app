import BottomNavBar from '@/src/layouts/components/BottomNavBar';
import { Box, styled } from '@mui/material';
import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<LayoutWrapper>
			<MainContentWrapper sx={{ bgcolor: 'white' }}>
				<Box component={'main'} sx={{ bgcolor: 'white', display: 'flex', flexDirection: 'column', paddingTop: '56px', paddingBottom: '66px' }}>
					{children}
				</Box>
				<BottomNavBar />
			</MainContentWrapper>
		</LayoutWrapper>
	);
};

export default Layout;

const LayoutWrapper = styled(Box)(() => ({
	position: 'relative',
	width: '100%',
	height: '100svh',
}));

const MainContentWrapper = styled(Box)(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	margin: '0 auto',
	width: '100%',
	maxWidth: `${theme.breakpoints.values.tablet}px`,
	height: '100%',
}));
