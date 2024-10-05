import DescriptionBox from '@/src/components/atoms/display/DescriptionBox';
import ReviewTag from '@/src/components/molecules/display/ReviewTag';
import { Box, Stack } from '@mui/material';

const ReviewList = ({ reviews }: { reviews: string[] }) => {
	return reviews.map((review, i) => <DescriptionBox key={i} description={review} />);
};

const MeetingReview = () => {
	const good = [
		'가장 좋았던 점은 평지라는 장점! 임장을 하는 동안에도 전혀 힘들이지 않고 돌아다닐 수 있었다.  나무가 많아서 그늘이 많았던 것이었어요. 공원입구 같은 도보길 ㅋㅋㅋㅋ',
		'ddd',
	];

	const bad = [
		'가장 좋았던 점은 평지라는 장점! 임장을 하는 동안에도 전혀 힘들이지 않고 돌아다닐 수 있었다.  나무가 많아서 그늘이 많았던 것이었어요. 공원입구 같은 도보길 ㅋㅋㅋㅋ',
	];

	return (
		<Box display={'flex'} flexDirection={'column'} gap={'24px'}>
			<Stack direction={'column'} gap={'8px'}>
				<ReviewTag typoVariant='body2' />
				<ReviewList reviews={good} />
			</Stack>
			<Stack direction={'column'} gap={'8px'}>
				<ReviewTag typoVariant='body2' status='bad' />
				<ReviewList reviews={bad} />
			</Stack>
		</Box>
	);
};

export default MeetingReview;
