import { CircularProgress } from '@mui/material';
import { FC, ReactNode, Suspense as ReactSuspense, SuspenseProps as ReactSuspenseProps } from 'react';

interface SuspenseProps {
	children: ReactNode;
	fallback?: ReactSuspenseProps['fallback'];
}

const Suspense: FC<SuspenseProps> = ({ children, fallback }) => {
	return <ReactSuspense fallback={fallback ? fallback : <CircularProgress />}>{children}</ReactSuspense>;
};

export default Suspense;
