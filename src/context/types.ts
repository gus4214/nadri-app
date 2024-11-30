import { LoginRequest } from '@/src/fetchers/auth/types';

export interface AuthValueTypes {
	loading: boolean;
	login: (params: LoginRequest, errCallback?: () => void) => Promise<void>;
	logout: () => void;
}
