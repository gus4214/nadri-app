// pages/api/board/search-list.ajax.js

export default function handler(req, res) {
	if (req.method === 'GET') {
		const { BD_STATE, BD_RATE, LIMIT, PAGE, CATE_IDX, CU_IDX, BD_START_DATE, BD_REGION } = req.query;

		// 목데이터 예시 (지역 정보 추가)
		const mockData = [
			{
				BD_IDX: 1,
				BD_TITLE: '게시판 제목 1',
				BD_STATE: 'ING',
				BD_CNT: 5,
				BD_PART_CNT: 2,
				BD_RATE: 1,
				BD_IMG: '/images/sample/sample.webp',
				BD_MAP: 'https://example.com/map1.jpg',
				BD_LINK: 'https://example.com/chat1',
				BD_START_DATE: '2024-10-01',
				BD_REGION: '서울특별시 송파구', // 지역 정보 추가
				BD_USER_PROFILE: [],
				BD_START_DATE: '10.12(일)',
				BD_CREATE_DATE: '방금 전',
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
				BD_REGION: '경기도 고양시', // 지역 정보 추가
				BD_USER_PROFILE: [],
				BD_START_DATE: '11.11(월)',
				BD_CREATE_DATE: '2시간 전',
			},
			{
				BD_IDX: 3,
				BD_TITLE: '게시판 제목 3',
				BD_STATE: 'END',
				BD_CNT: 4,
				BD_PART_CNT: 2,
				BD_RATE: 2,
				BD_IMG: '/images/sample/sample3.jpg',
				BD_MAP: 'https://example.com/map3.jpg',
				BD_LINK: 'https://example.com/chat3',
				BD_START_DATE: '2024-08-20',
				BD_REGION: '서울특별시 마포구', // 지역 정보 추가
				BD_USER_PROFILE: [
					{ profile: '/images/sample/profile/profile1.png' },
					{ profile: '/images/sample/profile/profile2.png' },
					{ profile: '/images/sample/profile/profile3.png' },
					{ profile: '/images/sample/profile/profile4.png' },
				],
				BD_START_DATE: '11.16(토)',
				BD_CREATE_DATE: '3시간 전',
			},
			{
				BD_IDX: 4,
				BD_TITLE: '게시판 제목 4',
				BD_STATE: 'END',
				BD_CNT: 6,
				BD_PART_CNT: 5,
				BD_RATE: 3,
				BD_IMG: '/images/sample/sample3.jpg',
				BD_MAP: 'https://example.com/map4.jpg',
				BD_LINK: 'https://example.com/chat4',
				BD_START_DATE: '2024-07-10',
				BD_REGION: '경기도 성남시', // 지역 정보 추가
				BD_USER_PROFILE: [{ profile: '/images/sample/profile/profile4.png' }, { profile: '/images/sample/profile/profile5.png' }],
				BD_START_DATE: '12.25(수)',
				BD_CREATE_DATE: '1일 전',
			},
			// 추가 목데이터...
		];

		// 필터 적용
		let filteredData = mockData;

		// BD_STATE 필터링 (빈 값일 경우 필터링하지 않음)
		if (BD_STATE) {
			filteredData = filteredData.filter((item) => item.BD_STATE === BD_STATE);
		}

		// BD_RATE 필터링 (빈 값일 경우 필터링하지 않음)
		if (BD_RATE) {
			const bdRate = parseInt(BD_RATE);
			if (!isNaN(bdRate)) {
				filteredData = filteredData.filter((item) => item.BD_RATE === bdRate);
			}
		}

		// BD_START_DATE 필터링 (빈 값일 경우 필터링하지 않음)
		if (BD_START_DATE) {
			filteredData = filteredData.filter((item) => item.BD_START_DATE === BD_START_DATE);
		}

		// BD_REGION 필터링 (빈 값일 경우 서울과 경기 전체 데이터를 내려줌)
		if (BD_REGION) {
			if (BD_REGION === '서울' || BD_REGION === '경기') {
				filteredData = filteredData.filter((item) => item.BD_REGION.startsWith(BD_REGION));
			} else {
				// 유효하지 않은 지역 값이 들어올 경우 빈 배열 반환
				filteredData = [];
			}
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
