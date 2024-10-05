// pages/api/board/search-list.ajax.js

export default function handler(req, res) {
	if (req.method === 'GET') {
		const { BD_STATE, BD_RATE, LIMIT, PAGE, CATE_IDX, CU_IDX, BD_START_DATE, BD_REGION } = req.query;

		// 목데이터 예시 (지역 정보 추가)
		const mockData = [
			{
				BD_IDX: 1,
				BD_TITLE: '분당구 서판교 판교원마을 산운마을🌲 아파트 단지 투어',
				BD_STATE: 'ING',
				BD_CNT: 5,
				BD_PART_CNT: 2,
				BD_RATE: 1,
				BD_IMG: '/images/sample/meet/판교.jpeg',
				BD_MAP: 'https://example.com/map1.jpg',
				BD_LINK: 'https://example.com/chat1',
				BD_REGION: '경기도 성남시', // 지역 정보 추가
				BD_USER_PROFILE: [],
				BD_START_DATE: '10.12(일)',
				BD_CREATE_DATE: '방금 전',
			},
			{
				BD_IDX: 2,
				BD_TITLE: '중랑구(신내동, 상봉동, 망우역) 위주로 10개 단지 임장 하실 분!!! 2~3회 분위기 살펴봐요~!',
				BD_STATE: 'ING',
				BD_CNT: 10,
				BD_PART_CNT: 1,
				BD_RATE: 3,
				BD_IMG: '/images/sample/meet/중랑구.jpeg',
				BD_MAP: 'https://example.com/map2.jpg',
				BD_LINK: 'https://example.com/chat2',
				BD_REGION: '서울특별시 중랑구', // 지역 정보 추가
				BD_USER_PROFILE: [],
				BD_START_DATE: '11.11(월)',
				BD_CREATE_DATE: '2시간 전',
			},
			{
				BD_IDX: 3,
				BD_TITLE: '🔥[부잘알 2기 모임] 인천 루원시티 선착순 5명 모집중!!🔥',
				BD_STATE: 'ING',
				BD_CNT: 5,
				BD_PART_CNT: 3,
				BD_RATE: 4,
				BD_IMG: '/images/sample/meet/인천.jpg',
				BD_MAP: 'https://example.com/map2.jpg',
				BD_LINK: 'https://example.com/chat2',
				BD_REGION: '경기도 인천광역시', // 지역 정보 추가
				BD_USER_PROFILE: [],
				BD_START_DATE: '10.20(토)',
				BD_CREATE_DATE: '1일 전',
			},
			{
				BD_IDX: 4,
				BD_TITLE: '서울 마포구 대장 아파트 단지 마포프레스티자이 투어(임장 루트 보유)',
				BD_STATE: 'END',
				BD_CNT: 4,
				BD_PART_CNT: 4,
				BD_RATE: 2,
				BD_IMG: '/images/sample/meet/마포구.jpg',
				BD_MAP: '/images/sample/root/마포구.png',
				BD_LINK: 'https://example.com/chat3',
				BD_REGION: '서울특별시 마포구',
				BD_USER_PROFILE: [
					{ profile: '/images/sample/profile/profile1.png' },
					{ profile: '/images/sample/profile/profile2.png' },
					{ profile: '/images/sample/profile/profile3.png' },
					{ profile: '/images/sample/profile/profile4.png' },
				],
				BD_START_DATE: '9.20(금)',
				BD_CREATE_DATE: '18일 전',
			},
			{
				BD_IDX: 5,
				BD_TITLE: '🚀 강동구(천호동, 암사동) 위주로 초역세권 단지 임장 가실분!!!',
				BD_STATE: 'END',
				BD_CNT: 5,
				BD_PART_CNT: 6,
				BD_RATE: 3,
				BD_IMG: '/images/sample/meet/강동구.jpeg',
				BD_MAP: '/images/sample/root/강동구.png',
				BD_LINK: 'https://example.com/chat4',
				BD_REGION: '서울특별시 강동구',
				BD_USER_PROFILE: [{ profile: '/images/sample/profile/profile4.png' }, { profile: '/images/sample/profile/profile5.png' }],
				BD_START_DATE: '9.28(토)',
				BD_CREATE_DATE: '12일 전',
			},
			{
				BD_IDX: 6,
				BD_TITLE: '9호선 인접 마곡나루 단지 오피스텔 상권 살펴보기(🌳호수공원, 식물원, 단지 내 조경🌳)',
				BD_STATE: 'END',
				BD_CNT: 7,
				BD_PART_CNT: 7,
				BD_RATE: 2,
				BD_IMG: '/images/sample/meet/마곡나루.jpg',
				BD_MAP: '/images/sample/root/마곡나루.png',
				BD_LINK: 'https://example.com/chat4',
				BD_REGION: '서울특별시 강서구',
				BD_USER_PROFILE: [{ profile: '/images/sample/profile/profile3.png' }, { profile: '/images/sample/profile/profile2.png' }],
				BD_START_DATE: '10.05(토)',
				BD_CREATE_DATE: '9일 전',
			},
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
