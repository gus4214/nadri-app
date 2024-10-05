import BasicBanner from '@/src/components/atoms/banners/BasicBanner';
import AppButton from '@/src/components/atoms/buttons/AppButton';
import BoldDivider from '@/src/components/atoms/display/BoldDivider';
import BottomFixedContainer from '@/src/components/atoms/layouts/BottomFixedContainer';
import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import VerticalField from '@/src/components/atoms/layouts/VerticalField';
import ImageZoomBox from '@/src/components/molecules/display/ImageZoomBox';
import InfoItem from '@/src/components/molecules/list/InfoItem';
import MeetingDetailHeader from '@/src/components/organisms/meetings/detail/MeetingDetailHeader';
import MeetingReview from '@/src/components/organisms/meetings/detail/MeetingReview';
import { GetMeetingItem } from '@/src/fetchers/meetings/types';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface MeetingDetailProps {
	meetingItem: Partial<GetMeetingItem>;
	action?: ReactNode;
}

const MeetingDetail: FC<MeetingDetailProps> = ({ meetingItem, action }) => {
	const { BD_STATE } = meetingItem;

	return (
		<>
			<BasicBanner src='/images/sample/sample.webp' />
			<MainContainer sx={{ pt: '24px' }}>
				<MeetingDetailHeader />
			</MainContainer>
			<BoldDivider />
			<MainContainer sx={{ paddingBottom: '84px' }}>
				<Stack direction={'column'} gap={'36px'}>
					<VerticalField label='임장 정보'>
						<InfoItem
							icon={<CalendarTodayOutlinedIcon sx={{ width: '16px', height: '16px', color: 'grey.500', fontWeight: 600 }} />}
							label='2024. 10. 1 (화) 시작'
						/>
						<InfoItem icon={<FmdGoodOutlinedIcon sx={{ width: '16px', height: '16px', color: 'grey.500', fontWeight: 600 }} />} label='경기 광명시' />
						<InfoItem icon={<CorporateFareIcon sx={{ width: '16px', height: '16px', color: 'grey.500', fontWeight: 600 }} />} label='1급지' />
					</VerticalField>
					<VerticalField label='임장 루트'>
						<ImageZoomBox image='/images/sample/root-sample.jpeg' alt='map' />
					</VerticalField>
					<VerticalField label='세부 설명'>
						<Typography variant='body2'>
							안녕하세요 MM월DD일 HH시부터 HH시까지 광명 뉴타운 -동부터 -동 까지 함께 임장 동행하실 동행원분들 모집합니다.
						</Typography>
					</VerticalField>
					<VerticalField label='임장 후기' sx={{ gap: '24px' }}>
						<MeetingReview />
					</VerticalField>
				</Stack>
			</MainContainer>
			<BottomFixedContainer bottom={60}>{action}</BottomFixedContainer>
		</>
	);
};

export default MeetingDetail;
