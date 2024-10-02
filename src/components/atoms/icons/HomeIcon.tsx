import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';
import HomeSvg from '@/public/images/icons/home.svg';
import HomeSelectedSvg from '@/public/images/icons/home-selected.svg';

interface HomeIconProps extends SvgIconProps {
	isSelected?: boolean;
}

const HomeIcon: React.FC<HomeIconProps> = ({ isSelected, ...props }) => {
	const targetComponent = isSelected ? HomeSelectedSvg : HomeSvg;

	return <SvgIcon component={targetComponent} viewBox='0 0 24 24' {...props} />;
};

export default HomeIcon;
