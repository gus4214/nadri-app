import BasicBanner from '@/src/components/atoms/banners/BasicBanner';
import AppButton from '@/src/components/atoms/buttons/AppButton';
import BoldDivider from '@/src/components/atoms/display/BoldDivider';
import BottomFixedContainer from '@/src/components/atoms/layouts/BottomFixedContainer';
import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import VerticalField from '@/src/components/atoms/layouts/VerticalField';
import InfoItem from '@/src/components/molecules/list/InfoItem';
import UserItem from '@/src/components/molecules/list/UserItem';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { NextPage } from 'next';

const MeetingRecruitDetailPage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='임장 모임 상세 정보' goBack />
			<BasicBanner src='/images/sample/sample.webp' />
			<MainContainer sx={{ pt: '24px', gap: '24px' }}>
				<Stack direction={'column'} gap={'8px'}>
					<Typography variant='subtitle1'>광명 뉴타운 뽀개기</Typography>
					<Stack direction={'row'}>
						<Typography variant='body2' color='grey.500'>
							멤버 2/5명 참여 중﹒4시간 전 게시
						</Typography>
					</Stack>
				</Stack>
				<UserItem />
			</MainContainer>
			<BoldDivider />
			<MainContainer sx={{ gap: '36px', paddingBottom: '84px' }}>
				<VerticalField label='임장 정보'>
					<InfoItem
						icon={<CalendarTodayOutlinedIcon sx={{ width: '16px', height: '16px', color: 'grey.500', fontWeight: 600 }} />}
						label='2024. 10. 1 (화) 시작'
					/>
					<InfoItem icon={<FmdGoodOutlinedIcon sx={{ width: '16px', height: '16px', color: 'grey.500', fontWeight: 600 }} />} label='경기 광명시' />
					<InfoItem icon={<CorporateFareIcon sx={{ width: '16px', height: '16px', color: 'grey.500', fontWeight: 600 }} />} label='1급지' />
				</VerticalField>
				<VerticalField label='임장 루트'>
					<Box sx={{ position: 'relative', height: '212px', borderRadius: '8px', border: '1px solid var(--black-10, rgba(0, 0, 0, 0.10))' }}>
						<Image src={'/images/sample/root-sample.jpeg'} alt='map' fill objectFit='contain' objectPosition='center' priority />
					</Box>
				</VerticalField>
				<VerticalField label='세부 설명'>
					<Typography variant='body2'>
						안녕하세요 MM월DD일 HH시부터 HH시까지 광명 뉴타운 -동부터 -동 까지 함께 임장 동행하실 동행원분들 모집합니다.
					</Typography>
				</VerticalField>
			</MainContainer>
			<BottomFixedContainer bottom={60}>
				<AppButton size='large'>모임 동행 요청하기</AppButton>
			</BottomFixedContainer>
		</>
	);
};

export default MeetingRecruitDetailPage;
