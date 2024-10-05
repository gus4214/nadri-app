import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import Banner from '@/src/components/organisms/main/Banner';
import MeetingSection from '@/src/components/organisms/main/meetings/MeetingSection';
import MainNavBar from '@/src/layouts/components/MainNavBar';

export default function Home() {
	return (
		<>
			<MainNavBar />
			<Banner />
			<MainContainer sx={{ pt: '20px', pb: '24px' }}>
				<MeetingSection />
			</MainContainer>
		</>
	);
}
