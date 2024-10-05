import DescriptionBox from '@/src/components/atoms/display/DescriptionBox';
import ReviewTag from '@/src/components/molecules/display/ReviewTag';
import { Box, Stack } from '@mui/material';
import { FC } from 'react';

interface MeetingReviewProps {
	reviews: { good: string[]; bad: string[] };
}

const ReviewList = ({ reviews }: { reviews: string[] }) => {
	return reviews.map((review, i) => <DescriptionBox key={i} description={review} />);
};

const MeetingReview: FC<MeetingReviewProps> = ({ reviews }) => {
	return (
		<Box display={'flex'} flexDirection={'column'} gap={'24px'}>
			<Stack direction={'column'} gap={'8px'}>
				<ReviewTag typoVariant='body2' />
				<ReviewList reviews={reviews.good} />
			</Stack>
			<Stack direction={'column'} gap={'8px'}>
				<ReviewTag typoVariant='body2' status='bad' />
				<ReviewList reviews={reviews.bad} />
			</Stack>
		</Box>
	);
};

export default MeetingReview;
