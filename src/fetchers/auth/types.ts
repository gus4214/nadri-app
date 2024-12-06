import { IResponse } from '@/src/fetchers/types';

export interface OAuthCallbackResult {
	expiresIn: number;
	token: string;
	refreshToken: string;
	refreshTokenExpiresIn: number;
}

export interface LoginRequest {
	CU_ID: string;
}

export interface SignupRequest {
	CU_ID?: string;
	CU_NAME?: string;
	CU_MAIL?: string;
	CU_PHONE?: string;
	CU_CI?: string; // 카카오 CI 정보 (사업자 등록 필요 - 보류)
	CU_NICKNAME?: string;
	CU_BIRTH?: Date;
	CU_GENDER?: string;
	CU_MEMO?: string;
}

export interface RegisterProfileImgRequest {
	CU_IDX: number;
	CU_PROFILE?: string;
}

export interface NickNameCheckRequest {
	CU_NICKNAME: string;
}

export interface LoginResult extends IResponse {
	cu_idx: number;
	timestamp: Date;
}

export interface SignupResult extends LoginResult {}

export interface RegisterProfileImgResult extends IResponse {
	CU_IDX?: number;
	timestamp: Date;
}

export interface NickNameCheckResult {
	result: boolean;
}
