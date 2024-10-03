import dayjs, { Dayjs } from 'dayjs';

export const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';
export const dateFormat = 'YYYY-MM-DD';

export const unixToDateTime = (timestamp: number | string): string => {
	return dayjsToDisplay(dayjs(timestamp), dateTimeFormat);
};

export const unixToDate = (timestamp: number | string): string => {
	return dayjsToDisplay(dayjs(timestamp), dateFormat);
};

export const dayjsToUnix = (dayjs: Dayjs): number => {
	return dayjs.valueOf();
};

export const dayjsToDisplay = (dayjs: Dayjs, format: string = dateTimeFormat): string => {
	return dayjs.format(format);
};
