import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface ReviewTagProps {
	status?: 'good' | 'bad';
	typoVariant?: 'body1' | 'body2';
}

const ReviewTag: FC<ReviewTagProps> = ({ status = 'good', typoVariant = 'body1' }) => {
	const renderMap = {
		good: {
			icon: <ThumbUpAltOutlinedIcon sx={{ width: '16px', height: '16px', color: 'info.main' }} />,
			text: '좋았어요',
			color: 'info.main',
		},
		bad: {
			icon: <ThumbDownAltOutlinedIcon sx={{ width: '16px', height: '16px', color: 'error.light' }} />,
			text: '별로예요',
			color: 'error.light',
		},
	};

	return (
		<Stack direction={'row'} gap={'8px'}>
			{renderMap[status].icon}
			<Typography variant={typoVariant} fontWeight={'fontWeightMedium'} color={renderMap[status].color}>
				{renderMap[status].text}
			</Typography>
		</Stack>
	);
};

export default ReviewTag;
