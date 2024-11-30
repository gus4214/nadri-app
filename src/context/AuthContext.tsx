import { AuthValueTypes } from '@/src/context/types';
import { LoginRequest } from '@/src/fetchers/auth/types';
import { createContext, ReactNode, useState } from 'react';

interface AuthProviderProps {
	children: ReactNode;
}

const defaultProvider: AuthValueTypes = {
	loading: false,
	login: () => Promise.resolve(),
	logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

	const login = async (params: LoginRequest, errCallback?: () => void) => {
		try {
		} catch (err) {
			if (errCallback) errCallback();
		}
	};

	const logout = async () => {};

	return <AuthContext.Provider value={{ loading, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
