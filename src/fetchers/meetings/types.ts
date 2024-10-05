export type BD_STATE = 'ING' | 'COMPLETE' | 'END';

export interface GetMeetingsRequest {
	BD_STATE: BD_STATE | string;
	BD_RATE: number;
	LIMIT: number;
	PAGE: number;
}
export interface GetMeetingsItem {
	BD_IDX: number; // 게시판 idx
	BD_TITLE: string; // 제목
	BD_STATE: BD_STATE; // 상태
	BD_CNT: number; // 동행 전체인원
	BD_PART_CNT: number; // 동행 참여인원
	BD_RATE: number; // 급지
	BD_IMG: string; // 대표이미지
	BD_MAP: string; // 지도이미지
	BD_LINK: string; // 채팅방링크
	BD_START_DATE: Date; // 시작일
	BD_USER_PROFILE: USER_PROFILE[]; // 참여 유저 프로필
}

interface USER_PROFILE {
	profile: string;
}

export interface GetMeetingItem extends GetMeetingsItem {
	BD_PART_YN: boolean; // 로그인 회원 참여 여부
	BD_CONTENT: string; // 세부 설명
	LEADER_INFO: LEADER_INFO[]; // 모임장 정보
}

interface LEADER_INFO {
	cu_idx: number;
	cu_id: string;
	cu_nickName: string;
	cu_profile: string;
	cu_gender: string;
	cu_birth: Date;
	cu_memo: string;
}
