import MainContainer from '@/src/components/atoms/layouts/MainContainer';
import Banner from '@/src/components/organisms/main/Banner';
import MeetingSection from '@/src/components/organisms/main/meetings/MeetingSection';

export default function Home() {
	return (
		<>
			<Banner />
			<MainContainer sx={{ pt: '20px', pb: '24px' }}>
				<MeetingSection />
			</MainContainer>
		</>
	);
}
