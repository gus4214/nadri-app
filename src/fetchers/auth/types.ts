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

export interface LoginResult extends IResponse {
	cu_idx: number;
	timestamp: Date;
}
