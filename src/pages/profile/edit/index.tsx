import ProfileEditFormContainer from '@/src/components/organisms/profile/edit/ProfileEditFormContainer';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { NextPage } from 'next';

const ProfileEditPage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='프로필 수정' goBack />
			<ProfileEditFormContainer />
		</>
	);
};

ProfileEditPage.layout = 'blank';

export default ProfileEditPage;
