import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';
import LogoEmptyDataSvg from '@/public/images/icons/logo-empty-data.svg';

const LogoEmptyDataIcon: React.FC<SvgIconProps> = (props) => {
	return <SvgIcon component={LogoEmptyDataSvg} viewBox='0 0 100 100' {...props} />;
};

export default LogoEmptyDataIcon;
