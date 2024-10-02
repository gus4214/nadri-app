import { ReactNode } from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';

interface BlankLayoutProps {
	children: ReactNode;
}

const BlankLayout = ({ children }: BlankLayoutProps) => {
	return <BlankLayoutWrapper>{children}</BlankLayoutWrapper>;
};

export default BlankLayout;

const BlankLayoutWrapper = styled(Box)(() => ({
	width: '100%',
	height: '100svh',
	backgroundColor: 'rgb(248, 248, 248)',
}));
