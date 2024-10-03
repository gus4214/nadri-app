import List from '@/src/components/molecules/list/List';
import ListHeader from '@/src/components/molecules/list/ListHeader';
import ListItem from '@/src/components/molecules/list/ListItem';
import { Divider } from '@mui/material';
import { FC } from 'react';

interface RecruitingMeetingsProps {
	isHeader?: boolean;
}

const sample = [
	{ id: 0, title: '마포구 대단지 탐험' },
	{ id: 1, title: '마곡나루 오피스텔 상권 살펴보기' },
	{
		id: 2,
		title:
			'제목은 최대 두 줄까지 노출 두 줄 영역 벗어나면 말줄임처리 제목은 최대 두 줄까지 노출 두 줄 영역 벗어나면 말줄임처리 제목은 최대 두 줄까지 노출 두 줄 영역 벗어나면 말줄임처리',
	},
];

const RecruitingMeetings: FC<RecruitingMeetingsProps> = ({ isHeader }) => {
	return (
		<>
			<List header={isHeader && <ListHeader title='모집 중 모임' sx={{ pb: '20px' }} href='/meetings/recruit' />}>
				{sample.map((v, i) => (
					<>
						{i !== 0 && <Divider sx={{ my: '20px' }} />}
						<ListItem key={v.id} title={v.title} />
					</>
				))}
			</List>
		</>
	);
};

export default RecruitingMeetings;
