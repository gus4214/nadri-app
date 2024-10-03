import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Banner = () => {
	return (
		<Box
			sx={{
				position: 'relative',
				height: '150px',
			}}
		>
			<Image src={'/images/sample/sample.webp'} alt='banner' fill objectFit='cover' objectPosition='center' style={{ filter: 'brightness(70%)' }} />
			<Box
				sx={{
					zIndex: 1,
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
			>
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'}>
					<Stack direction={'column'} gap={'4px'} textAlign={'center'}>
						<Typography variant='h2' color='white'>
							판교 역세권 아파트 알아보기
						</Typography>
						<Typography variant='body2' color='white'>
							강남 주변 임장 모임 정보를 확인해보세요
						</Typography>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};

export default Banner;
