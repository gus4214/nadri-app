import Head from 'next/head';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import createEmotionCache from '@/src/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/src/@core/theme';
import Layout from '@/src/layouts/Layout';
import BlankLayout from '@/src/layouts/BlankLayout';
import '@/src/styles/globals.css';

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	Component: NextPage;
}

const clientSideEmotionCache = createEmotionCache();

const ComponentGuard = ({ Component, pageProps }: MyAppProps) => {
	if (Component.layout === 'blank') {
		return (
			<BlankLayout>
				<Component {...pageProps} />
			</BlankLayout>
		);
	}
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

const App = (props: MyAppProps) => {
	const { emotionCache = clientSideEmotionCache, pageProps, Component } = props;

	return (
		<>
			<CacheProvider value={emotionCache}>
				<Head>
					<title>Jipnadri App</title>
					<meta charSet='utf-8' />
					<meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<ComponentGuard {...props} />
				</ThemeProvider>
			</CacheProvider>
		</>
	);
};

export default App;
