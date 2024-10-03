import { Container, ContainerProps } from '@mui/material';
import { FC, ReactNode } from 'react';

interface MainContainerProps extends ContainerProps {
	children?: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children, ...props }) => {
	return (
		<Container maxWidth={'tablet'} sx={{ px: '20px', display: 'flex', flexDirection: 'column' }} {...props}>
			{children}
		</Container>
	);
};

export default MainContainer;
