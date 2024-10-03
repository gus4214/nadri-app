import { Container, ContainerProps, SxProps } from '@mui/material';
import { FC, ReactNode } from 'react';

interface MainContainerProps extends ContainerProps {
	children?: ReactNode;
	sx?: SxProps;
}

const MainContainer: FC<MainContainerProps> = ({ children, sx }) => {
	return (
		<Container maxWidth={'tablet'} sx={{ px: '20px', display: 'flex', flexDirection: 'column', ...sx }}>
			{children}
		</Container>
	);
};

export default MainContainer;
