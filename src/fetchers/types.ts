import { ApiInfo } from '@/src/fetchers/api';

export interface IResponse<T> {
	data?: T;
	message?: string;
	status?: number;
}

export interface IPageRequest {
	page: number;
	size: number;
	sort: string[];
}

export interface IPageResponse<T> {
	content: T[];
	pageable: IPageable;
	last: boolean;
	totalElements: number;
	totalPages: number;
	first: boolean;
	size: number;
	number: number;
	sort: ISort;
	numberOfElements: number;
	empty: boolean;
}

export interface IPageable {
	pageNumber: number;
	pageSize: number;
	sort: ISort;
	offset: number;
	paged: boolean;
	unpaged: boolean;
}

export interface ISort {
	empty: boolean;
	unsorted: boolean;
	sorted: boolean;
}

export interface IRequest<T, R> {
	api: ApiInfo;
	body?: T;
	slug?: Record<string, string | number>;
	queryString?: T;
	defaultData?: R;
	header?: object;
	token?: string;
	locale?: string;
}
