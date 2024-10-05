import { USER_PROFILE } from '@/src/fetchers/meetings/types';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, AvatarGroup } from '@mui/material';
import { FC } from 'react';

interface ProfileGroupProps {
	profiles: USER_PROFILE[];
}

const ProfileGroup: FC<ProfileGroupProps> = ({ profiles }) => {
	const total = profiles.length;

	return (
		<AvatarGroup
			max={3}
			total={total}
			spacing={12}
			renderSurplus={() => (
				<>
					<MoreHorizIcon sx={{ fontSize: '12px' }} />
				</>
			)}
			sx={{ '& .MuiAvatar-root': { width: '16px', height: '16px', border: '1px solid white', marginLeft: '-4px' } }}
		>
			{profiles.map((v, i) => (
				<Avatar key={i} alt={`profile${i}`} src={v.profile} />
			))}
		</AvatarGroup>
	);
};

export default ProfileGroup;
