import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogContent } from '@mui/material';
import Image from 'next/image';
import { FC, useState } from 'react';

interface ImageZoomBoxProps {
	image: string;
	alt: string;
}

const ImageZoomBox: FC<ImageZoomBoxProps> = ({ image, alt }) => {
	const [open, setOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string>('');

	const handleOpen = (imageSrc: string) => {
		setSelectedImage(imageSrc);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedImage('');
	};

	return (
		<>
			<Box
				sx={{
					position: 'relative',
					height: '212px',
					borderRadius: '8px',
					border: '1px solid var(--black-10, rgba(0, 0, 0, 0.10))',
					cursor: 'pointer',
					':hover': {
						'& .image-root': {
							filter: 'brightness(90%)',
							transition: '0.3s',
						},
					},
				}}
				onClick={() => handleOpen(image)} // 이미지 클릭 시 핸들러 호출
			>
				<Image className='image-root' src={image} alt={alt} fill objectFit='cover' objectPosition='center' priority />
			</Box>
			{/* 모달(Dialog) 컴포넌트 */}
			<Dialog open={open} onClose={handleClose} maxWidth={'tablet'} fullScreen>
				<DialogContent sx={{ position: 'relative', p: 0, width: '100%', height: '100svh' }}>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							position: 'relative',
							backgroundColor: '#000',
						}}
					>
						<Image src={selectedImage} alt='Full Size Image' fill objectFit='contain' objectPosition='center' priority />
						<Box
							aria-label='close'
							onClick={handleClose}
							sx={{
								position: 'absolute',
								cursor: 'pointer',
								top: 8,
								right: 8,
							}}
						>
							<CloseIcon sx={{ color: 'white' }} fontSize='large' />
						</Box>
					</Box>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ImageZoomBox;
