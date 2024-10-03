import MeetingRegisterForm from '@/src/components/organisms/meeting/register/MeetingRegisterForm';
import DetailNavBar from '@/src/layouts/components/DetailNavBar';
import { NextPage } from 'next';

const MeetingRegisterPage: NextPage = () => {
	return (
		<>
			<DetailNavBar title='모임 만들기' goBack />
			<MeetingRegisterForm />
		</>
	);
};

MeetingRegisterPage.layout = 'blank';

export default MeetingRegisterPage;
