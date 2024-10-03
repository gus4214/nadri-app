import useFilePreview from '@/src/hooks/imagePreview';
import { TControl } from '@/src/types/form.d';
import { AddCircleOutlined, Close } from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import { ChangeEvent, useRef } from 'react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';

interface FormImageUploadProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> extends TControl<TFieldValues, TName> {
	defaultImage?: string;
	width?: number | string;
	height?: number | string;
	disabled?: boolean;
	onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
	onClose?: () => void;
}

const FormImageUpload = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
	width = 300,
	height = 300,
	watch,
	resetField,
	setValue,
	name,
	defaultImage,
	disabled,
	onChange,
	onClose,
	...props
}: FormImageUploadProps<TFieldValues, TName>) => {
	const {
		field: { value, onChange: onFieldChange, ref },
		fieldState: { error },
	} = useController({ ...props, name });
	const imageFile = watch!(name);
	const imageRef = useRef<HTMLInputElement | null>(imageFile);
	const preview = useFilePreview(imageFile);

	const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		onFieldChange(e.target.files);
		props.clearErrors && props.clearErrors(name);
		onChange && onChange(e);
	};

	const handleCloseImage = () => {
		resetField!(name);
		onClose && onClose();
	};

	return (
		<>
			{!imageFile ? (
				<ImageUploadBox
					sx={{
						width,
						height,
					}}
					onClick={() => !disabled && imageRef.current?.click()}
				>
					<input
						type='file'
						hidden
						accept='image/png, image/jpeg, image/jpg'
						value={value}
						name={name}
						onChange={onFileChange}
						ref={(el) => {
							imageRef.current = el;
							ref(el);
						}}
					/>
					<AddCircleOutlined color={'primary'} sx={{ width: '40px', height: '40px' }} />
				</ImageUploadBox>
			) : (
				<ImageUploadBox
					sx={{
						width,
						height,
					}}
				>
					{!disabled && <PreviewImageClose onClick={() => handleCloseImage()} />}
					<PreviewImage src={preview as string} />
				</ImageUploadBox>
			)}
		</>
	);
};

const ImageUploadBox = styled(Box)({
	background: '#FFFFFF',
	border: '1px dashed #A0A0A0',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	cursor: 'pointer',
	overflow: 'hidden',
	borderRadius: '8px',
});

const PreviewImage = styled('img')({
	width: '100%',
	height: '100%',
	objectFit: 'contain',
});

const PreviewImageClose = styled(Close)({
	width: '24px',
	height: '24px',
	background: ' #303030',
	border: '1px solid #000000',
	borderRadius: '4px',
	color: '#fff',
	cursor: 'pointer',
	position: 'absolute',
	top: '8px',
	right: '8px',
});

export default FormImageUpload;
