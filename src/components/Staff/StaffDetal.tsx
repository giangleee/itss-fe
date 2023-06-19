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
              <ExpGroup {...staff} />
            </>
          }
        />
        <Route
          path="/review"
          element={<ReviewGroup />}
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
type ExpGroupProps = {
  age: number;
  company_exp: number;
  total_exp: number;
};
const ExpGroup: FC<ExpGroupProps> = ({ age, company_exp, total_exp }) => {
  const navigate = useNavigate();
  return (
    <div className="w-5/12 flex-1 bg-transparent flex flex-col gap-3">
      <Paper
        className="flex p-3 items-center gap-3 text-blue-600 border-blue-500 border-r-4 hover:cursor-pointer hover:bg-slate-100 transition-all"
        onClick={() => navigate("review")}
      >
        <FontAwesomeIcon icon={faUser} />
        <Typography className="font-bold hover:font-extrabold">レビュー歴史</Typography>
      </Paper>
      <Paper className="flex-1 py-2.5 px-3">
        <Typography className="font-bold">自分取得スキル</Typography>
        <div className="font-extrabold">
          <ul className="list-disc pl-5 pt-2">
            <li>スキル 1</li>
            <li>スキル 2</li>
            <li>スキル 3</li>
          </ul>
        </div>
      </Paper>
      <Paper className="py-2.5 px-3">
        <Typography className="font-bold">経験年数</Typography>
        <Typography className="font-extrabold">
          <span className="text-2xl">{company_exp}</span>年
        </Typography>
      </Paper>
      <Paper className="py-2.5 px-3">
        <Typography className="font-bold">年齢</Typography>
        <Typography className="font-extrabold">
          <span className="text-2xl">{age}</span>年
        </Typography>
      </Paper>
      <Paper className="py-2.5 px-3">
        <Typography className="font-bold">経験年数合計</Typography>
        <Typography className="font-extrabold">
          <span className="text-2xl">{total_exp}</span>年
        </Typography>
      </Paper>
    </div>
  );
};

const ReviewGroup: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex gap-3 flex-col">
      <Paper
        className="flex p-3 items-center gap-3 text-blue-600 border-blue-500 border-r-4 hover:cursor-pointer hover:bg-slate-100 transition-all"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faUser} />
        <Typography className="font-bold hover:font-extrabold">情報</Typography>
      </Paper>
      <Paper className="flex-1 bg-slate-200 overflow-y-scroll">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </Paper>
    </div>
  );
};
const ReviewItem: FC = () => {
  return <Paper className="h-36 m-3"></Paper>;
};
// const ScheduleCard = () => {
export default StaffDetail;
