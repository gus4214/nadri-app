import { Box, IconButton, styled, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface DetailNavBarProps {
	goBack?: boolean;
	title?: string;
}

const DetailNavBar: FC<DetailNavBarProps> = ({ goBack, title }) => {
	const router = useRouter();

	const handleClick = () => {
		router.back();
	};

	return (
		<DetailNavBarWrapper sx={{ justifyContent: goBack ? 'space-between' : 'center' }}>
			{goBack && (
				<IconButton aria-label='goBack' size='small' onClick={handleClick}>
					<ChevronLeftIcon sx={{ color: 'black' }} />
				</IconButton>
			)}
			{title && (
				<Typography variant='subtitle1' align='center'>
					{title}
				</Typography>
			)}
			{goBack && <Box width={'34px'} />}
		</DetailNavBarWrapper>
	);
};

export default DetailNavBar;

const DetailNavBarWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: '16px 20px',
	position: 'fixed',
	zIndex: 10,
	top: 0,
	height: '56px',
	width: '100%',
	maxWidth: `${theme.breakpoints.values.tablet}px`,
	backgroundColor: 'white',
}));
