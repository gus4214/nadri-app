import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import ProfileHeader from '@/src/components/organisms/profile/ProfileHeader';
import UserMeetingsTab from '@/src/components/organisms/profile/UserMeetingsTab';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { NextPage } from 'next';

const ProfilePage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='내정보' />
			<MainContainer sx={{ py: '24px' }}>
				<ProfileHeader />
			</MainContainer>
			<UserMeetingsTab />
		</>
	);
};

export default ProfilePage;
