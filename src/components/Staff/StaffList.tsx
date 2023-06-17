import { FC } from "react";
import { Staff } from "../../types";
import { Paper } from "@mui/material";
import avatar from "../../assets/img/avatar.png";
import { PropsWithChildren } from "react";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StaffListProps {
  data: Staff[];
  isLoading?: boolean;
}

const StaffList: FC<StaffListProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex-1 bg-transparent">
        <Paper className="flex-1 bg-transparent">Loading...</Paper>
      </div>
    );
  }
  return (
    <div className="flex-1 flex flex-row items-center justify-evenly flex-wrap pt-3">
      {data.map((staff) => (
        <StaffCard
          key={staff._id}
          staff={staff}
        />
      ))}
    </div>
  );
};
const StaffCard = ({ staff }: { staff: Staff }) => {
  const age = staff.age ? staff.age : new Date().getFullYear() - new Date(staff.date_of_birth).getFullYear();
  return (
    <Paper
      elevation={3}
      className="w-1/4 h-full rounded-xl flex items-stretch flex-col"
    >
      <div className="flex justify-center items-center">
        <img
          src={staff.avatar || avatar}
          className="rounded-full w-4/6 mt-2"
          alt={staff.fullname}
        />
      </div>
      <div className="flex-1 h-16 p-3">
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
          <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
          <img className="w-8" src="https://static-00.iconduck.com/assets.00/instagram-icon-1024x1024-8qt57uwd.png" />
          <img className="w-8" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" />
        </div>
      </div>
    </Paper>
  );
};
const Styledb = ({ children }: PropsWithChildren) => {
  return <p className="font-bold mt-1">{children}</p>;
};
export default StaffList;
