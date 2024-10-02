import BottomNavBar from '@/src/layouts/components/BottomNavBar';
import MainNavBar from '@/src/layouts/components/MainNavBar';
import { Box, Container, styled } from '@mui/material';
import React, { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<LayoutWrapper>
			<MainContentWrapper sx={{ bgcolor: 'white' }}>
				<MainNavBar />
				<Box component={'main'} sx={{ bgcolor: 'white', display: 'flex', flexDirection: 'column', paddingTop: '56px' }}>
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

const MainContentWrapper = styled(Box)(() => ({
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	margin: '0 auto',
	width: '100%',
	maxWidth: '600px',
	height: '100%',
}));
