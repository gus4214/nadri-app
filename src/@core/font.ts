import localFont from 'next/font/local';

export const pretendardFont = localFont({
	src: [
		{
			path: '../styles/fonts/PretendardVariable.woff2',
			style: 'normal',
		},
	],
	display: 'swap',
});
