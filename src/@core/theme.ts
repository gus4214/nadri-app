import { createTheme } from '@mui/material/styles';
import { pretendardFont } from '@core/font';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: false; // removes the `xs` breakpoint
		sm: false;
		md: false;
		lg: false;
		xl: false;
		mobile: true; // adds the `mobile` breakpoint
		tablet: true;
	}
	interface TypographyVariants {
		label1: React.CSSProperties;
		label2: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		label1?: React.CSSProperties;
		label2?: React.CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		label1: true;
		label2: true;
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: '#FF6B0A',
			light: '#FFF0E7',
		},
		info: {
			main: '#5772FF',
		},
		grey: {
			100: '#F5F5F5',
			300: '#EAEBEE',
			500: '#9A9A9A',
		},
	},
	typography: {
		fontFamily: pretendardFont.style.fontFamily,
		fontWeightBold: 600,
		h2: {
			fontSize: '1.375rem',
			fontWeight: 600,
			lineHeight: 'normal',
			letterSpacing: '-0.55px',
		},
		subtitle1: {
			fontSize: '1.25rem',
			fontWeight: 600,
			lineHeight: 'normal',
			letterSpacing: '-0.5px',
		},
		body1: {
			lineHeight: 'normal',
			letterSpacing: '-0.4px',
		},
		body2: {
			lineHeight: 'normal',
			letterSpacing: '-0.35px',
		},
		button: {
			fontWeight: 500,
			fontSize: '1rem',
			lineHeight: 'normal',
			letterSpacing: '-0.4px',
		},
		label1: {
			fontWeight: 500,
			fontSize: '0.75rem',
			lineHeight: 'normal',
			letterSpacing: '-0.3px',
		},
		label2: {
			fontWeight: 400,
			fontSize: '0.625rem',
			lineHeight: 'normal',
			letterSpacing: '-0.25px',
		},
	},
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 600,
		},
	},
});
