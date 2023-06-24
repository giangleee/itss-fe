import { Paper, Rating, Typography } from "@mui/material";
import type { FC } from "react";
import avatarPlaceholder from "../../../assets/img/avatar.png";
import Contact from "../Contact";
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
      <Contact
        facebook={facebook}
        instagram={instagram}
        twitter={twitter}
      />
    </Paper>
  );
};
export default InfoCard;
