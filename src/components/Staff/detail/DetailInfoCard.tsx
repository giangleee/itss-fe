import { Paper, Typography } from "@mui/material";
import { faEnvelope, faFlag, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import maleImg from "../../../assets/img/male-greet.png";
import femaleImg from "../../../assets/img/female-greet-f.png";
import type { FC } from "react";
type DetailInfoCardProps = {
  gender: "Male" | "Female" | "Other";
  fullname: string;
  intro?: string;
  address?: string;
  email?: string;
  phone_number?: string;
};
const DetailInfoCard: FC<DetailInfoCardProps> = ({ fullname, gender, intro, address, phone_number, email }) => {
  return (
    <Paper className="w-1/4 rounded-lg bg-gradient-to-br from-indigo-700 to-violet-300 hover:to-violet-400 transition-all duration-1000 text-white flex flex-col p-3 items-center gap-3">
      <Typography
        variant="h5"
        className="font-bold"
      >
        私は{fullname}です
      </Typography>
      <img
        src={gender === "Male" ? maleImg : femaleImg}
        alt="gender"
        className="w-4/6 hover:drop-shadow-lg hover:scale-110 transition-all duration-300"
      />
      <Typography>「{intro || `私は子供が好きで、真面目な人です。${fullname}と申します。`}」</Typography>
      <address className="self-stretch flex flex-col gap-2 flex-1">
        <p
          title={address}
          className=" flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faFlag} />
          <span className="whitespace-nowrap overflow-ellipsis overflow-hidden">{address || "見つかりません"}</span>
        </p>
        <p className=" flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} />
          {email || "ヌル"}
        </p>
        <p className=" flex items-center gap-2">
          <FontAwesomeIcon icon={faPhoneVolume} />
          {phone_number || "見つかりません"}
        </p>
      </address>
    </Paper>
  );
};
export default DetailInfoCard;
