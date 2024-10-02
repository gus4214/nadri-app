import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';
import LogoSvg from '@/public/images/icons/logo.svg';

const LogoIcon: React.FC<SvgIconProps> = (props) => {
	return <SvgIcon component={LogoSvg} viewBox='0 0 24 24' {...props} />;
};

export default LogoIcon;
