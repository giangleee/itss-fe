import { FC } from "react";
import { Staff } from "../../types";
import StaffCard from "./StaffCard";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StaffListProps {
  data: Staff[];
  isLoading?: boolean;
}

const StaffList: FC<StaffListProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex-1 flex bg-transparent items-center justify-center">
        <p className="text-orange-500 font-extrabold text-xl">Loading...</p>
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

export default StaffList;
