import List from '@/src/components/molecules/list/List';
import ListHeader from '@/src/components/molecules/list/ListHeader';
import ListItem from '@/src/components/molecules/list/ListItem';
import { useGetMeetings } from '@/src/fetchers/meetings';
import { Divider } from '@mui/material';
import { useRouter } from 'next/router';
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

export default RecruitingMeetings;
