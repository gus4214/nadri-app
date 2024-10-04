import { Box } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

interface BasicBannerProps {
	src: string;
}

const BasicBanner: FC<BasicBannerProps> = ({ src }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				height: '150px',
			}}
		>
			<Image src={src} alt='banner' fill objectFit='cover' objectPosition='center' priority />
		</Box>
	);
};

export default BasicBanner;
