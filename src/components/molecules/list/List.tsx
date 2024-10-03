import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

interface ListProps {
	header?: ReactNode;
	children: ReactNode;
}

const List: FC<ListProps> = ({ header, children }) => {
	return (
		<Box display={'flex'} flexDirection={'column'} component={'section'}>
			{header && header}
			<Box component={'ul'}>{children}</Box>
		</Box>
	);
};

export default List;
