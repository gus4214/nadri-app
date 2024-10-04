// pages/api/board/search-list.ajax.js

export default function handler(req, res) {
	if (req.method === 'GET') {
		const { BD_STATE, BD_RATE, LIMIT, PAGE, CATE_IDX, CU_IDX, BD_START_DATE } = req.query;

		// 목데이터 예시
		const mockData = [
			{
				BD_IDX: 1,
				BD_TITLE: '게시판 제목 1',
				BD_STATE: 'ING',
				BD_CNT: 5,
				BD_PART_CNT: 2,
				BD_RATE: 1,
				BD_IMG: '/images/sample/sample2.jpg',
				BD_MAP: 'https://example.com/map1.jpg',
				BD_LINK: 'https://example.com/chat1',
				BD_START_DATE: '2024-10-01',
				BD_USER_PROFILE: [{ profile: 'https://example.com/profile1.jpg' }, { profile: 'https://example.com/profile2.jpg' }],
			},
			{
				BD_IDX: 2,
				BD_TITLE: '게시판 제목 2',
				BD_STATE: 'ING',
				BD_CNT: 3,
				BD_PART_CNT: 3,
				BD_RATE: 1,
				BD_IMG: '/images/sample/sample2.jpg',
				BD_MAP: 'https://example.com/map2.jpg',
				BD_LINK: 'https://example.com/chat2',
				BD_START_DATE: '2024-09-15',
				BD_USER_PROFILE: [{ profile: 'https://example.com/profile3.jpg' }, { profile: 'https://example.com/profile4.jpg' }],
			},
			// 추가 목데이터...
		];

		// 필터 적용
		let filteredData = mockData;

		if (BD_STATE) {
			filteredData = filteredData.filter((item) => item.BD_STATE === BD_STATE);
		}

		if (BD_RATE) {
			filteredData = filteredData.filter((item) => item.BD_RATE === parseInt(BD_RATE));
		}

		if (BD_START_DATE) {
			filteredData = filteredData.filter((item) => item.BD_START_DATE === BD_START_DATE);
		}

		// 페이징 처리
		const limit = parseInt(LIMIT) || 10;
		const page = parseInt(PAGE) || 1;
		const start = (page - 1) * limit;
		const end = start + limit;
		const paginatedData = filteredData.slice(start, end);

		res.status(200).json(paginatedData);
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
