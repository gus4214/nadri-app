import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';
import LogoSvg from '@/public/images/icons/logo-text.svg';

const LogoTextIcon: React.FC<SvgIconProps> = (props) => {
	return <SvgIcon component={LogoSvg} viewBox='0 0 66 24' {...props} />;
};

export default LogoTextIcon;
