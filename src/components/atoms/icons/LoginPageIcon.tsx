import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';
import LoginPageSvg from '@/public/images/icons/loginPage.svg';

const LoginPageIcon: React.FC<SvgIconProps> = (props) => {
	return <SvgIcon component={LoginPageSvg} viewBox='0 0 320 85' {...props} />;
};

export default LoginPageIcon;
