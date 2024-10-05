import { SERVER_API } from '@/src/fetchers/api';
import { IResponse, IRequest } from '@/src/fetchers/types';
import axios, { AxiosError, AxiosInstance, AxiosResponse, Method, RawAxiosRequestHeaders } from 'axios';
import qs from 'qs';

export const apiClient: AxiosInstance = axios.create({
	baseURL: `${SERVER_API}`,
	timeout: 30 * 1000,
	headers: {
		'Content-Type': `application/json;charset=UTF-8`,
		Accept: 'application/json',
	},
});

const parseUriBySlug = (baseUri: string, slugs: Record<string, string | number>): string => {
	let replacedUri = baseUri;
	if (slugs) {
		for (const s in slugs) {
			replacedUri = replacedUri.replace(`{${s}}`, String(slugs[s]));
		}
	}
	return replacedUri;
};

// 공통 API 요청 함수
const requestApi = async <T, R>(request: IRequest<T, R>, options?: RawAxiosRequestHeaders): Promise<AxiosResponse<R>> => {
	console.log(`====== [INFO] ${request.api.description} request =====`, request);

	try {
		const response = await apiClient.request<T, AxiosResponse<R>>({
			method: request.api.method as Method,
			url: request.slug ? parseUriBySlug(request.api.uri, request.slug) : request.api.uri,
			params: request.queryString,
			paramsSerializer: (params) => {
				return qs.stringify(params, { arrayFormat: 'comma', encode: false });
			},
			data: request.body,
			withCredentials: false,
			headers: {
				Authorization: `Bearer ${request?.token}`,
				...options,
			},
		});

		console.log(`====== [INFO] ${request.api.description} OK =====`, response);
		return response;
	} catch (e) {
		const error = e as AxiosError;
		console.log(`====== [ERROR] ${request.api.description} FAILED =====`, error);
		throw error;
	}
};

export const callApi = async <T, R extends object>(request: IRequest<T, R>, options?: RawAxiosRequestHeaders): Promise<R> => {
	const response = await requestApi<T, R>(request, options);
	return response.data;
};

export const callAxiosResponseApi = async <T, R>(request: IRequest<T, R>, options?: RawAxiosRequestHeaders): Promise<AxiosResponse<R>> => {
	return requestApi<T, R>(request, options);
};
