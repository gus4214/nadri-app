import UnderlineTextButton from '@/src/components/atoms/buttons/UnderlineTextButton';
import BottomFixedContainer from '@/src/components/atoms/layouts/BottomFixedContainer';
import ProfileEditFormContainer from '@/src/components/organisms/profile/edit/ProfileEditFormContainer';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { Box } from '@mui/material';
import { NextPage } from 'next';

const ProfileEditPage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='프로필 수정' goBack />
			<ProfileEditFormContainer />
			<BottomFixedContainer sx={{ py: '24px' }}>
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
					<UnderlineTextButton buttonText='로그아웃' />
				</Box>
			</BottomFixedContainer>
		</>
	);
};

ProfileEditPage.layout = 'blank';

export default ProfileEditPage;
