import Head from 'next/head';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import createEmotionCache from '@/src/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/src/@core/theme';

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	Component: NextPage;
}

const clientSideEmotionCache = createEmotionCache();

const App = (props: MyAppProps) => {
	const { emotionCache = clientSideEmotionCache, pageProps, Component } = props;

	return (
		<>
			<CacheProvider value={emotionCache}>
				<Head>
					<meta charSet='utf-8' />
					<meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' />
					<title>jipnadri</title>
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</>
	);
};

export default App;
