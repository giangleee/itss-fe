import { FC } from "react";
import { Avatar, Paper, Rating, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { getStaffReviews } from "../../../api/request";
import { useQuery } from "@tanstack/react-query";
const ReviewGroup: FC = () => {
  const { staff_id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery(
    ["getReview"],
    () => {
      if (!staff_id) return Promise.resolve([]);
      return getStaffReviews(staff_id);
    },
    { initialData: [] },
  );
  console.log(data);
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
        {data.map((review) => (
          <ReviewItem
            {...review}
            key={review._id}
          />
        ))}
      </Paper>
    </div>
  );
};
type ReviewItemProps = {
  user_detail: { avatar?: string; fullName?: string; address?: string }[];
  ratting?: number;
  comment?: string;
  createdAt?: string;
};
const ReviewItem: FC<ReviewItemProps> = ({ user_detail, ratting, comment, createdAt }) => {
  const user = user_detail[0] || {};
  return (
    <Paper className="h-60 m-3 flex flex-col">
      <div className="flex justify-between p-3">
        <div className="flex gap-3">
          <Avatar
            src={user.avatar || "https://picsum.photos/200"}
            className="h-24 w-24 shadow-md"
          />
          <div className="flex flex-col justify-evenly">
            <Typography className="font-extrabold text-2xl">{user.fullName}</Typography>
            <Typography>
              <b>住所</b>：{user.address}
            </Typography>
          </div>
        </div>
        <div className="flex p-3">
          <Typography variant="h5">レート：</Typography>
          <Rating
            readOnly
            size="large"
            value={ratting}
          />
        </div>
      </div>
      <div className="flex-1 flex justify-between m-3">
        <div className="pl-10 flex-1 overflow-hidden">
          <Typography className="font-extrabold">レビュー：</Typography>
          <Typography>{comment}</Typography>
        </div>
        <div className="self-end text-gray-500">
          <Typography>作成日：{new Date(createdAt || "").toLocaleString("vi")}</Typography>
        </div>
      </div>
    </Paper>
  );
};
export default ReviewGroup;
