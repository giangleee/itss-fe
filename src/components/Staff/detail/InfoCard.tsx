import { Paper, Rating, Typography } from '@mui/material';
import type { FC } from 'react';
import avatarPlaceholder from "../../../assets/img/avatar.png";
type InfoCardProps = {
  avatar?: string;
  fullname: string;
  rating_avg: number;
  facebook?: string;
  instagram?: string;
  twitter?: string;
};
const InfoCard: FC<InfoCardProps> = ({ fullname, avatar, rating_avg, facebook, instagram, twitter }) => {
  return (
    <Paper className="w-1/4 flex flex-col items-center gap-3 pt-5 rounded-lg">
      <img
        className="rounded-full w-5/6 aspect-square object-cover border-gray-300 border-1 shadow-md"
        src={avatar || avatarPlaceholder}
      />
      <Typography
        variant="h5"
        className="font-bold"
      >
        {fullname}
      </Typography>
      <Typography
        variant="h6"
        color="gray"
      >
        スタッフ
      </Typography>
      <Rating
        readOnly
        value={rating_avg}
      />
      <div className="flex flex-row gap-3 mt-2 justify-center">
        <img
          className="w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
        />
        <img
          className="w-8"
          src="https://static-00.iconduck.com/assets.00/instagram-icon-1024x1024-8qt57uwd.png"
        />
        <img
          className="w-8"
          src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
        />
      </div>
    </Paper>
  );
};
export default InfoCard;