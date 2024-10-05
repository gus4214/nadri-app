// pages/api/board/detail.ajax.js

export default function handler(req, res) {
	if (req.method === 'GET') {
		const { BD_IDX } = req.query;

		// 필수 파라미터 확인
		if (!BD_IDX) {
			return res.status(400).json({ error: 'BD_IDX is required.' });
		}

		const bdIdx = parseInt(BD_IDX);

		if (isNaN(bdIdx)) {
			return res.status(400).json({ error: 'BD_IDX must be an integer.' });
		}

		// 목데이터 예시 (상세 정보 포함)
		const mockDetailData = [
			{
				BD_IDX: 1,
				BD_TITLE: '분당구 서판교 판교원마을 산운마을🌲 아파트 단지 투어',
				BD_STATE: 'ING',
				BD_CNT: 5,
				BD_PART_CNT: 2,
				BD_RATE: 1,
				BD_IMG: '/images/sample/meet/판교.jpeg',
				BD_MAP: '/images/sample/root/판교.png',
				BD_CONTENT:
					'판교원마을과 산운마을을 중심으로 아파트 단지 투어를 진행합니다. 다양한 아파트 단지를 함께 둘러보고 정보를 교환하는 시간을 가질 예정입니다.',
				BD_LINK: 'https://example.com/chat1',
				BD_REGION: '경기도 성남시', // 지역 정보 추가
				BD_START_DATE: '2024. 10. 12(일)',
				BD_CREATE_DATE: '방금 전',
				LEADER_INFO: {
					cu_idx: 101,
					cu_id: 'leader1',
					cu_nickName: '임장조아',
					cu_profile: '/images/sample/profile.png',
					cu_gender: '남성',
					cu_birth: '1994. 03. 14',
					cu_memo: '안녕하세요! 판교 아파트 단지 투어 모임의 모임장입니다. 함께 유익한 시간을 보내요!',
				},
				BD_USER_PROFILE: [{ profile: '/images/sample/profile/profile1.png' }],
			},
			{
				BD_IDX: 2,
				BD_TITLE: '중랑구(신내동, 상봉동, 망우역) 위주로 10개 단지 임장 하실 분!!! 2~3회 분위기 살펴봐요~!',
				BD_STATE: 'ING',
				BD_CNT: 10,
				BD_PART_CNT: 1,
				BD_RATE: 3,
				BD_IMG: '/images/sample/meet/중랑구.jpeg',
				BD_MAP: '/images/sample/root/중랑구.png',
				BD_CONTENT: `신내동, 상봉동, 망우역 주변의 10개 아파트 단지를 임장하여 실제 거주 분위기를 살펴보고 정보를 공유합니다. \n\n☑️ 단지 임장 체크리스트\n1. 주변 환경: 쾌적 / 어수선함 / 괜찮\n2. 유해시설: 있음 / 없음 / 많음\n3. 동간 거리: 좁음 / 보통 / 넓음\n4. 단지 관리: 관리 덜 됨 / 일반 / 깨끗함\n5. 역과의 거리: 5분 / 10분 /15분\n\n🙌 역할분담\n1. 기록\n2. 지도보며 길찾기\n3. 부동산 전고점 정보\n4. 사진 촬영 \n\n\n 임장 경력 2년차입니다!! 역할 분담 확실히 하여 이번 전고점 노립시다!!`,
				BD_LINK: 'https://example.com/chat2',
				BD_START_DATE: '2024-09-15',
				BD_REGION: '서울특별시 중랑구', // 지역 정보 추가
				BD_START_DATE: '11.11(월)',
				BD_CREATE_DATE: '2시간 전',
				LEADER_INFO: {
					cu_idx: 104,
					cu_id: 'leader2',
					cu_nickName: '임장 2년차',
					cu_profile: '/images/sample/profile/profile1.png',
					cu_gender: '여성',
					cu_birth: '1985. 08. 15',
					cu_memo: '안녕하세요! 중랑구 아파트 임장 모임의 모임장입니다.😄 함께 유익한 정보를 나눠요!',
				},
				BD_USER_PROFILE: [{ profile: '/images/sample/profile/profile3.png' }],
				BD_MEMBER: true,
			},
			{
				BD_IDX: 3,
				BD_TITLE: '🔥[부잘알 2기 모임] 인천 루원시티 선착순 5명 모집중!!🔥',
				BD_STATE: 'ING',
				BD_CNT: 5,
				BD_PART_CNT: 3,
				BD_RATE: 1,
				BD_IMG: '/images/sample/meet/인천.jpg',
				BD_MAP: '/images/sample/root/인천루트.jpg',
				BD_CONTENT:
					'인천 루원시티 지역의 다양한 아파트 단지를 임장하여 좋은 매물을 함께 찾아보는 모임입니다.\n\n📋 임장 체크리스트\n1. 주차 공간 확인\n2. 건물 관리 상태\n3. 주변 편의 시설\n4. 층수 및 전망\n5. 실내 구조 확인\n\n🙌 역할분담\n1. 매물 사진 촬영\n2. 현장 기록\n3. 매물 정보 정리\n4. 참여자 의견 수렴 \n\n임장 경력 5년차입니다!! 함께 협력하여 좋은 매물을 찾아봅시다!',
				BD_LINK: 'https://example.com/chat3',
				BD_START_DATE: '10.20(토)',
				BD_REGION: '경기도 인천광역시', // 지역 정보 추가
				BD_CREATE_DATE: '1일 전',
				LEADER_INFO: {
					cu_idx: 105,
					cu_id: 'leader3',
					cu_nickName: '프로 임장러',
					cu_profile: '/images/sample/profile/profile4.png',
					cu_gender: '남성',
					cu_birth: '1990. 12. 25',
					cu_memo: '⭐️실전 투자, 내집 마련 전문!!',
				},
				BD_USER_PROFILE: [
					{ profile: '/images/sample/profile/profile2.png' },
					{ profile: '/images/sample/profile/profile3.png' },
					{ profile: '/images/sample/profile/profile1.png' },
				],
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
				BD_CONTENT:
					'서울 마포구의 대장 아파트 단지인 마포프레스티자이를 중심으로 한 임장 투어를 진행합니다. 마포프레스티자이의 특별한 임장 루트를 보유하고 있어, 효율적이고 체계적인 임장이 가능합니다.\n\n📋 **임장 체크리스트**\n1. **주변 환경**: 쾌적 / 어수선함 / 괜찮\n2. **건물 관리 상태**: 양호 / 보통 / 불량\n3. **주차 공간**: 충분 / 부족\n4. **주변 편의 시설**: 학교, 마트, 공원 등\n5. **실내 구조 확인**: 넓음 / 보통 / 좁음\n\n🙌 **역할분담**\n1. **매물 사진 촬영**\n2. **현장 기록**\n3. **매물 정보 정리**\n4. **참여자 의견 수렴**\n\n임장 경력 4년차입니다!! 체계적인 임장을 통해 효율적으로 좋은 매물을 찾아봅시다!',
				BD_LINK: 'https://example.com/chat4',
				BD_REGION: '서울특별시 마포구',
				BD_START_DATE: '9.20(금)',
				BD_CREATE_DATE: '18일 전',
				LEADER_INFO: {
					cu_idx: 106,
					cu_id: 'leader4',
					cu_nickName: '따봉도치',
					cu_profile: '/images/sample/profile/profile3.png',
					cu_gender: '남성',
					cu_birth: '1988. 07. 22',
					cu_memo: '안녕하세요! 마포프레스티자이 모임장입니다. 따봉도치와 함께 효율적인 임장을 진행해요!',
				},
				BD_USER_PROFILE: [
					{ profile: '/images/sample/profile/profile1.png' },
					{ profile: '/images/sample/profile/profile2.png' },
					{ profile: '/images/sample/profile/profile3.png' },
					{ profile: '/images/sample/profile/profile4.png' },
				],
				BD_REVIEWS: {
					good: [
						'주변 인프라가 너무 좋았어요!! 백화점, 이마트, 스타벅스 전부 도보 10분 거리에 있습니다 ㅎㅎ',
						'연트럴파크 공원길이 쭉 이어져있어서 산책하기에도 좋아요 :)',
					],
					bad: [
						'자동차 때문에 주변 소음이 조금 있어요!!',
						'신촌에서 홍대로 빠지는 길은 언덕이 조금 높아서 도보로 다니기에는 힘들어요',
						'대로변이 커서 자동차가 많고 차가 막힐 것 같아요ㅠㅠㅠ',
					],
				},
			},
			{
				BD_IDX: 5,
				BD_TITLE: '🚀 강동구(천호동, 암사동) 위주로 초역세권 단지 임장 가실분!!!',
				BD_STATE: 'END',
				BD_CNT: 5,
				BD_PART_CNT: 3,
				BD_RATE: 3,
				BD_IMG: '/images/sample/meet/강동구.jpeg',
				BD_MAP: '/images/sample/root/강동구.png',
				BD_CONTENT:
					'강동구 천호동과 암사동을 중심으로 한 초역세권 아파트 단지 임장을 진행합니다. 지하철 5호선과 8호선 근처의 다양한 아파트 단지를 임장하여 최고의 매물을 찾아보세요.\n\n📋 임장 체크리스트\n1. 교통 편의성: 지하철 접근성\n2. 주변 상권: 편의점, 음식점, 쇼핑몰 등\n3. 주차 공간: 충분 / 부족\n4. 단지 관리 상태: 양호 / 보통 / 불량\n5. 실내 구조 및 마감: 최신 / 일반 / 오래됨\n\n🙌 역할분담\n1. 매물 사진 촬영\n2. 현장 기록\n3. 매물 정보 정리\n4. 참여자 의견 수렴\n5. 매물 비교 분석\n6. 후속 조치 계획 수립\n\n임장 경력 5년차입니다!! 철저한 임장을 통해 최고의 매물을 찾아봅시다!',
				BD_LINK: 'https://example.com/chat5',
				BD_REGION: '서울특별시 강동구',
				BD_START_DATE: '9.28(토)',
				BD_CREATE_DATE: '12일 전',
				LEADER_INFO: {
					cu_idx: 107,
					cu_id: 'leader5',
					cu_nickName: '임장나이트',
					cu_profile: '/images/sample/profile/profile5.png',
					cu_gender: '남성',
					cu_birth: '1987. 11. 30',
					cu_memo: '안녕하세요! 강동구 초역세권 임장 모임의 모임장입니다. 함께 최고의 매물을 찾아봐요!',
				},
				BD_USER_PROFILE: [
					{ profile: '/images/sample/profile/profile4.png' },
					{ profile: '/images/sample/profile/profile5.png' },
					{ profile: '/images/sample/profile/profile1.png' },
				],
				BD_REVIEWS: {
					good: [
						'예전과 다르게 오래 된 건물들이 없어지고 새롭게 바뀌어 가는 것 같아요!! 기대됩니다👍',
						'주변 인프라가 너무 좋다',
						'말해뭐해 초역세권',
					],
					bad: ['음... 뭔가 구도심 같은 느낌???'],
				},
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
				BD_CONTENT:
					'마곡나루 지역의 오피스텔 단지를 중심으로 한 상권 살펴보기 임장 모임입니다. 호수공원, 식물원 등 주변 자연 환경과 단지 내 조경을 함께 살펴보며, 최고의 상권을 파악해보세요.\n\n📋 임장 체크리스트\n1. 주변 자연 환경: 호수공원, 식물원 접근성\n2. 단지 내 조경 상태: 잘 관리됨 / 보통 / 관리 필요\n3. 상권 분석: 편의시설, 식당, 카페 등\n4. **교통 편의성**: 지하철 9호선 접근성\n5. **오피스텔 시설**: 엘리베이터 상태, 보안 시스템 등\n\n🙌 역할분담\n1. 매물 사진 촬영\n2. 현장 기록\n3. 상권 분석 보고서 작성\n4. 참여자 의견 수렴\n5. 매물 비교 분석\n6. 후속 조치 계획 수립\n7. 최종 보고서 작성\n\n임장 경력 4년차입니다!! 철저한 임장을 통해 최고의 상권과 매물을 찾아봅시다! 🌟',
				BD_LINK: 'https://example.com/chat6',
				BD_REGION: '서울특별시 강서구',
				BD_START_DATE: '10.05(토)',
				BD_CREATE_DATE: '9일 전',
				LEADER_INFO: {
					cu_idx: 108,
					cu_id: 'leader6',
					cu_nickName: '임장마곡',
					cu_profile: '/images/sample/profile/profile5.png',
					cu_gender: '여성',
					cu_birth: '1992. 06. 18',
					cu_memo: '저와 함께해요!',
				},
				BD_USER_PROFILE: [
					{ profile: '/images/sample/profile/profile3.png' },
					{ profile: '/images/sample/profile/profile2.png' },
					{ profile: '/images/sample/profile/profile1.png' },
					{ profile: '/images/sample/profile/profile5.png' },
				],
				BD_REVIEWS: {
					good: [
						'가장 좋았던 점은 평지라는 장점! 임장을 하는 동안에도 전혀 힘들이지 않고 돌아다닐 수 있었다.  나무가 많아서 그늘이 많았던 것이었어요. 공원입구 같은 도보길 ㅋㅋㅋㅋ',
						'거리가 너무 깨끗해요 ㅎㅎㅎ',
						'뭔가 제2의 판교과 될 것 같은 도시 조망과 동시에 숲세권이라 공기도 좋아요 :)',
					],
					bad: ['점심에 회사원들이 많아서 바글바글 거립니다.'],
				},
			},
		];

		// 해당 BD_IDX 찾기
		const boardDetail = mockDetailData.find((item) => item.BD_IDX === bdIdx);

		if (!boardDetail) {
			return res.status(404).json({ error: 'Board not found.' });
		}

		// BD_PART_YN을 기본값으로 설정 (여기서는 false로 설정)
		const BD_PART_YN = false;

		// 응답 데이터 구성
		const responseData = {
			BD_IDX: boardDetail.BD_IDX,
			BD_PART_YN: BD_PART_YN,
			BD_TITLE: boardDetail.BD_TITLE,
			BD_STATE: boardDetail.BD_STATE,
			BD_CNT: boardDetail.BD_CNT,
			BD_PART_CNT: boardDetail.BD_PART_CNT,
			BD_RATE: boardDetail.BD_RATE,
			BD_IMG: boardDetail.BD_IMG,
			BD_MAP: boardDetail.BD_MAP,
			BD_CONTENT: boardDetail.BD_CONTENT,
			BD_LINK: boardDetail.BD_LINK,
			BD_START_DATE: boardDetail.BD_START_DATE,
			LEADER_INFO: boardDetail.LEADER_INFO,
			BD_REGION: boardDetail.BD_REGION,
			BD_CREATE_DATE: boardDetail.BD_CREATE_DATE,
			BD_REVIEWS: boardDetail.BD_REVIEWS,
			BD_USER_PROFILE: boardDetail.BD_USER_PROFILE,
			BD_MEMBER: boardDetail.BD_MEMBER,
		};

		return res.status(200).json(responseData);
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
