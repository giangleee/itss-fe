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
  user?: { avatar?: string; fullname?: string; address?: string };
  ratting?: number;
  comment?: string;
  createdAt?: string;
};
const ReviewItem: FC<ReviewItemProps> = ({
  user = {
    address: "ハノイ工科大学",
    avatar:
      "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-1/347104653_1163064977696133_4703746752503919074_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=F8h6lnXIHTkAX_zwEBS&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDjTvf8e91JFExuPxtFj2ggYWkBHFvkpz6HS6AkhmjTzw&oe=64926AAB",
    fullname: "Lee Thanh Giang",
  },
  ratting = 4,
  comment = "いいですね＜３",
  createdAt = "2021-09-20T14:00:00.000Z",
}) => {
  return (
    <Paper className="h-60 m-3 flex flex-col">
      <div className="flex justify-between p-3">
        <div className="flex gap-3">
          <Avatar
            src={user.avatar}
            className="h-24 w-24 shadow-md"
          />
          <div className="flex flex-col justify-evenly">
            <Typography className="font-extrabold text-2xl">{user.fullname}</Typography>
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
        <div className="pl-10">
          <Typography className="font-extrabold">レビュー：</Typography>
          <Typography>{comment}</Typography>
        </div>
        <div className="self-end text-gray-500">
          <Typography>作成日：{new Date(createdAt).toLocaleString("vi")}</Typography>
        </div>
      </div>
    </Paper>
  );
};
export default ReviewGroup;
