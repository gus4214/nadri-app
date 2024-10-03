import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import { FC, ReactNode } from 'react';

interface BottomFixedContainerProps {
	children: ReactNode;
}

const BottomFixedContainer: FC<BottomFixedContainerProps> = ({ children }) => {
	return <MainContainer sx={{ position: 'fixed', bottom: 0, py: '16px', bgcolor: 'white' }}>{children}</MainContainer>;
};

export default BottomFixedContainer;
