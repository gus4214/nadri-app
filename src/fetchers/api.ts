type HtmlMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';

export interface ApiInfo {
	uri: string;
	method: HtmlMethod;
	description?: string;
}

export const SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

console.log('SERVER API HOST = ', SERVER_API);

export const apis: { [k: string]: ApiInfo } = {
	GET_MEETINGS_API: { uri: '/board/search-list.ajax', method: 'GET', description: '게시판 리스트 요청 API' },
	GET_MEETING_API: { uri: '/board/detail.ajax', method: 'GET', description: '게시판 상세 요청 API' },
};
