import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import { FC, ReactNode } from 'react';

interface BottomFixedContainerProps {
	children: ReactNode;
	bottom?: number;
}

const BottomFixedContainer: FC<BottomFixedContainerProps> = ({ children, bottom = 0 }) => {
	return <MainContainer sx={{ position: 'fixed', bottom, py: '16px', bgcolor: 'white' }}>{children}</MainContainer>;
};

export default BottomFixedContainer;
