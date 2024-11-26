export interface OAuthCallbackResult {
	expiresIn: number;
	token: string;
	refreshToken: string;
	refreshTokenExpiresIn: number;
}
