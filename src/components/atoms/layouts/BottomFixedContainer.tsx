import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import { SxProps } from '@mui/material';
import { FC, ReactNode } from 'react';

interface BottomFixedContainerProps {
	children: ReactNode;
	top?: boolean;
}

const BottomFixedContainer: FC<BottomFixedContainerProps> = ({ children, top }) => {
	return <MainContainer sx={{ position: 'fixed', bottom: top ? 60 : 0, py: '16px', bgcolor: 'white' }}>{children}</MainContainer>;
};

export default BottomFixedContainer;
