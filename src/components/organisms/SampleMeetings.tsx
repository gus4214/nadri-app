import List from '@/src/components/molecules/list/List';
import ListHeader from '@/src/components/molecules/list/ListHeader';
import ListItem from '@/src/components/molecules/list/ListItem';
import { Divider } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface SampleMeetingsProps {
	isHeader?: boolean;
}

const sample = [
	{ id: 0, title: '펜타역세권!! 안산 초지역 메이저타운 푸르지오 메트로단지 임장 투어' },
	{ id: 1, title: '9호선 인접 마곡나루 단지 오피스텔 상권 살펴보기(서울숲 호수 공원, 단지 내 조경)' },
	{ id: 2, title: '연남동 연트럴파크 주변 부동산 발품 다니면서 임장 가실 분 구해요~~' },
];

const SampleMeetings: FC<SampleMeetingsProps> = ({ isHeader }) => {
	const router = useRouter();

	return (
		<>
			<List
				header={
					isHeader && (
						<ListHeader
							title='모집 중 모임'
							sx={{ pb: '20px' }}
							onClick={() => router.push({ pathname: '/meetings/recruit', query: { status: 'ing' } })}
						/>
					)
				}
			>
				{sample.map((v, i) => (
					<>
						{i !== 0 && <Divider sx={{ my: '20px' }} />}
						<ListItem key={v.id} title={v.title} onClick={() => router.push('/meetings/recruit/1')} />
					</>
				))}
			</List>
		</>
	);
};

export default SampleMeetings;
