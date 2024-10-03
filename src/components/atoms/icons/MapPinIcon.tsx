import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';
import MapPinSvg from '@/public/images/icons/map-pin.svg';

const MapPinIcon: React.FC<SvgIconProps> = (props) => {
	return <SvgIcon component={MapPinSvg} viewBox='0 0 17 16' sx={{ width: '17px', height: '16px' }} {...props} />;
};

export default MapPinIcon;
