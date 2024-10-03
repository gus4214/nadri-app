import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';
import KaKaoSvg from '@/public/images/icons/kakao.svg';

const KaKaoIcon: React.FC<SvgIconProps> = (props) => {
	return <SvgIcon component={KaKaoSvg} viewBox='0 0 19 18' {...props} />;
};

export default KaKaoIcon;
