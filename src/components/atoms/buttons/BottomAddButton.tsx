import AddIcon from '@mui/icons-material/Add';
import { Fab as MuiFab, styled } from '@mui/material';

const BottomAddButton = () => {
	return (
		<Fab color='primary' aria-label='add'>
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
