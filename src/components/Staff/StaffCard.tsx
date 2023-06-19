import { Button, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
import { PropsWithChildren } from "react";
import { Staff } from "../../types";
const StaffCard = ({ staff }: { staff: Staff }) => {
  const age = staff.age ? staff.age : new Date().getFullYear() - new Date(staff.date_of_birth).getFullYear();
  const navigate = useNavigate();
  return (
    <Paper
      elevation={3}
      className="w-1/4 h-full rounded-xl flex items-stretch flex-col hover:shadow-slate-900 hover:shadow-md hover:cursor-pointer transition-shadow"
      onClick={() => {
        navigate(`/staff/${staff._id}`);
      }}
    >
      <div className="flex justify-center items-center">
        <img
          src={staff.avatar || avatar}
          className="rounded-full w-4/6 mt-2 border-gray-300 border-1 shadow-md aspect-square object-cover"
          alt={staff.fullname}
        />
      </div>
      <div className="flex-1 h-16 px-3 py-2">
        <Styledb>氏名</Styledb>
        <p className="ml-1">{staff.fullname}</p>
        <Styledb>年齢</Styledb>
        <p className="ml-1">{age}</p>
        <Styledb>住所</Styledb>
        <p
          className="overflow-hidden overflow-ellipsis whitespace-nowrap ml-1"
          title={staff.address}
        >
          {staff.address}
        </p>
        <Styledb>電話番号</Styledb>
        <p className="ml-1">{staff.phone_number}</p>
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
      </div>
      <Button
        variant="contained"
        className="mb-3 self-center rounded-md"
        size="small"
        style={{ backgroundColor: "#FF7008", color: "#fff" }}
      >
        <Link to={staff._id}>詳細</Link>
      </Button>
    </Paper>
  );
};
const Styledb = ({ children }: PropsWithChildren) => {
  return <p className="font-bold mt-0.5">{children}</p>;
};
export default StaffCard;
