import { useEffect, useState } from 'react';

export default function useFilePreview(file?: File[]) {
	const [preview, setPreview] = useState<string | undefined>();

	const updatePreview = (file?: File[]) => {
		if (file && file[0]) {
			const reader = new FileReader();
			reader.readAsDataURL(file[0]);
			reader.onloadend = () => {
				setPreview(reader.result as string);
			};
		}
	};

	useEffect(() => {
		updatePreview(file);
	}, [file]);

	return preview;
}
