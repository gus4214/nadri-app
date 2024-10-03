import ImageCard from '@/src/components/molecules/cards/ImageCard';
import List from '@/src/components/molecules/list/List';
import ListHeader from '@/src/components/molecules/list/ListHeader';
import { Box } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const sample = [
	{ id: 0, title: '프로 임장러와 함께 지역 둘러보실분! 프로 임장러와 함께 지역 둘러보실분!' },
	{ id: 1, title: '강서구 학군 좋은 대단지' },
	{ id: 2, title: '경기도 성남시 신축 오피스텔 주변 둘러보기' },
	{ id: 3, title: '판교 카페거리 주변 대단지 분석 및 모임' },
];

const CompletedMeetings = () => {
	return (
		<List header={<ListHeader title='완료된 모임' href='/meetings/complete' />}>
			<PerfectScrollbar options={{ wheelPropagation: false }} style={{ display: 'flex', gap: '12px' }}>
				{sample.map((v, i) => (
					<Box key={v.id}>
						<ImageCard title={v.title} />
					</Box>
				))}
			</PerfectScrollbar>
		</List>
	);
};

export default CompletedMeetings;
