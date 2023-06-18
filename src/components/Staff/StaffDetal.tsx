import { useQuery } from "@tanstack/react-query";
import { getListStaff } from "../../api/request";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { Staff } from "../../types";
import { FC } from "react";
import { Paper, Rating, Typography } from "@mui/material";
import maleImg from "../../assets/img/male-greet.png";
import femaleImg from "../../assets/img/female-greet-f.png";
import avatarPlaceholder from "../../assets/img/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFlag, faPhoneVolume, faUser } from "@fortawesome/free-solid-svg-icons";

const StaffDetail = () => {
  const { data } = useQuery<Staff[]>({
    queryKey: ["staffs"],
    queryFn: () => getListStaff({}),
    initialData: [],
    refetchOnWindowFocus: false,
  });
  const { staff_id } = useParams();
  const staff = data.find((staff) => staff._id === staff_id);
  if (!staff) return <div>Not found</div>;
  return (
    <div className="w-full h-full flex gap-4">
      <InfoCard {...staff} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DetailInfoCard {...staff} />
              <ExpCard />
            </>
          }
        />
        <Route
          path="/review"
          element={
            <>
            </>
          }
        />
      </Routes>
    </div>
  );
};
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
        className="rounded-full w-5/6 border-gray-300 border-1 shadow-md"
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
const ExpCard: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-5/12 flex-1 bg-transparent flex flex-col">
      <Paper
        className="flex p-3 items-center gap-3 text-blue-600 hover:cursor-pointer"
        onClick={() => navigate("review")}
      >
        <FontAwesomeIcon icon={faUser} />
        <Typography className="font-bold">レビュー歴史</Typography>
      </Paper>
      <Paper></Paper>
      <Paper></Paper>
      <Paper></Paper>
      <Paper></Paper>
    </div>
  );
};
// const ScheduleCard = () => {
export default StaffDetail;
