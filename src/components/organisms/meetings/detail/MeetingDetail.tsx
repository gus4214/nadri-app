import BasicBanner from '@/src/components/atoms/banners/BasicBanner';
import AppButton from '@/src/components/atoms/buttons/AppButton';
import BoldDivider from '@/src/components/atoms/display/BoldDivider';
import BottomFixedContainer from '@/src/components/atoms/layouts/BottomFixedContainer';
import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import VerticalField from '@/src/components/atoms/layouts/VerticalField';
import ImageZoomBox from '@/src/components/molecules/display/ImageZoomBox';
import InfoItem from '@/src/components/molecules/list/InfoItem';
import UserItem from '@/src/components/molecules/list/UserItem';
import MeetingDetailHeader from '@/src/components/organisms/meetings/detail/MeetingDetailHeader';
import MeetingReview from '@/src/components/organisms/meetings/detail/MeetingReview';
import { GetMeetingItem } from '@/src/fetchers/meetings/types';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface MeetingDetailProps {
	meetingItem: GetMeetingItem;
	action?: ReactNode;
}

const MeetingDetail: FC<MeetingDetailProps> = ({ meetingItem, action }) => {
	return (
		<>
			<BasicBanner src={meetingItem?.BD_IMG} />
			<MainContainer sx={{ pt: '24px' }}>
				<MeetingDetailHeader meetingItem={meetingItem} />
				{/* 테스트용 더미 */}
				{meetingItem?.BD_MEMBER && (
					<>
						<Divider sx={{ my: '24px' }} />
						<VerticalField label='멤버 현황'>
							<Box display={'flex'} flexDirection={'column'} gap={'16px'}>
								<Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
									<UserItem
										profile={'/images/sample/profile/profile2.png'}
										nickName={'부린이'}
										gender={'여성'}
										birth={'1993. 02. 12'}
										memo={'부동산 공부중인 부린이입니다!! :)'}
									/>
									<AppButton size='small'>수락</AppButton>
								</Stack>
								<Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
									<UserItem
										profile={'/images/sample/profile/profile3.png'}
										nickName={'따봉도치'}
										gender={'남성'}
										birth={'1990. 11. 12'}
										memo={'저와 동행하시면 행운이 생깁니다 ㅎㅎ'}
									/>
									<AppButton size='small' disabled>
										완료
									</AppButton>
								</Stack>
							</Box>
						</VerticalField>
					</>
				)}
			</MainContainer>

			<BoldDivider />
			<MainContainer sx={{ paddingBottom: '84px' }}>
				<Stack direction={'column'} gap={'36px'}>
					<VerticalField label='임장 정보'>
						<InfoItem
							icon={<CalendarTodayOutlinedIcon sx={{ width: '16px', height: '16px', color: 'grey.500', fontWeight: 600 }} />}
							label={`${meetingItem?.BD_START_DATE} 시작`}
						/>
						<InfoItem
							icon={<FmdGoodOutlinedIcon sx={{ width: '16px', height: '16px', color: 'grey.500', fontWeight: 600 }} />}
							label={`${meetingItem?.BD_REGION}`}
						/>
						<InfoItem
							icon={<CorporateFareIcon sx={{ width: '16px', height: '16px', color: 'grey.500', fontWeight: 600 }} />}
							label={`${meetingItem?.BD_RATE}급지`}
						/>
					</VerticalField>
					<VerticalField label='임장 루트'>
						<ImageZoomBox image={meetingItem?.BD_MAP} alt='map' />
					</VerticalField>
					<VerticalField label='세부 설명'>
						<Typography variant='body2' sx={{ whiteSpace: 'break-spaces', wordBreak: 'keep-all' }}>
							{meetingItem?.BD_CONTENT}
						</Typography>
					</VerticalField>
					{meetingItem?.BD_STATE === 'END' && (
						<VerticalField label='임장 후기' sx={{ gap: '24px' }}>
							<MeetingReview reviews={meetingItem.BD_REVIEWS} />
						</VerticalField>
					)}
				</Stack>
			</MainContainer>
			<BottomFixedContainer bottom={60}>{action}</BottomFixedContainer>
		</>
	);
};

export default MeetingDetail;
