import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import { SxProps } from '@mui/material';
import { FC, ReactNode } from 'react';

interface BottomFixedContainerProps {
	children: ReactNode;
	bottom?: number;
	sx?: SxProps;
}

const BottomFixedContainer: FC<BottomFixedContainerProps> = ({ children, bottom = 0, sx }) => {
	return <MainContainer sx={{ position: 'fixed', bottom, py: '16px', bgcolor: 'white', ...sx }}>{children}</MainContainer>;
};

export default BottomFixedContainer;
