import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';
import BuildingSvg from '@/public/images/icons/building.svg';

const BuildingIcon: React.FC<SvgIconProps> = (props) => {
	return <SvgIcon component={BuildingSvg} viewBox='0 0 20 16' sx={{ width: '20px', height: '16px' }} {...props} />;
};

export default BuildingIcon;
