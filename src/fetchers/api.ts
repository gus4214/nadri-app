type HtmlMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';

export interface ApiInfo {
	uri: string;
	method: HtmlMethod;
	description?: string;
}

export const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;
export const WEB_HOST = process.env.NEXT_PUBLIC_WEB;

console.log('SERVER API HOST = ', SERVER_API);

export const apis: { [k: string]: ApiInfo } = {
	// 인증
	SIGN_UP_API: { uri: '/api/customer/register.ajax', method: 'POST', description: '회원가입 요청 API' },
	LOGIN_API: { uri: '/api/customer/login.ajax', method: 'POST', description: '로그인 요청 API' },

	// 모임
	GET_MEETINGS_API: { uri: '/api/board/search-list.ajax', method: 'GET', description: '게시판 리스트 요청 API' },
	GET_MEETING_API: { uri: '/api/board/detail.ajax', method: 'GET', description: '게시판 상세 요청 API' },
};
