import AddIcon from '@mui/icons-material/Add';
import { Fab as MuiFab, styled } from '@mui/material';
import { FC } from 'react';

interface BottomAddButtonProps {
	onClick?: () => void;
}

const BottomAddButton: FC<BottomAddButtonProps> = ({ onClick }) => {
	return (
		<Fab color='primary' aria-label='add' onClick={onClick}>
			<AddIcon sx={{ width: '24px', height: '24px', color: 'white' }} />
		</Fab>
	);
};

export default BottomAddButton;

const Fab = styled(MuiFab)(({ theme }) => ({
	width: '44px',
	height: '44px',
	padding: '10px',
	boxShadow: 'none',
}));
