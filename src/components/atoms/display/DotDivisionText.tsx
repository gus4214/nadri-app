import { Typography } from '@mui/material';
import { FC } from 'react';

interface DotDivisionTextProps {
	texts: string[];
}

const DotDivisionText: FC<DotDivisionTextProps> = ({ texts }) => {
	const dot = (i: number) => {
		if (i === 0) return '';
		return '﹒';
	};

	return (
		<Typography variant='body2' color='grey.500'>
			{texts.map((text, i) => `${dot(i)}${text}`)}
		</Typography>
	);
};

export default DotDivisionText;
