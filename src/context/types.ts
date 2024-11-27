import { LoginRequest } from '@/src/fetchers/auth/types';

export interface AuthValueTypes {
	loading: boolean;
	login: (params: LoginRequest) => Promise<void>;
	logout: () => void;
}
