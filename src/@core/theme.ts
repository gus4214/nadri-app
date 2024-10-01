import { createTheme } from '@mui/material/styles';

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
}

export const theme = createTheme({
	palette: {
		primary: {
			main: '#FF6B0A',
			light: '#FFF0E7',
		},
	},
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 600,
		},
	},
});
