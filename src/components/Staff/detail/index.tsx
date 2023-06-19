import { useQuery } from "@tanstack/react-query";
import { getListStaff } from "../../../api/request";
import { Route, Routes, useParams } from "react-router-dom";
import { Staff } from "../../../types";
import InfoCard from "./InfoCard";
import DetailInfoCard from "./DetailInfoCard";
import ExpGroup from "./ExpGroup";
import ReviewGroup from "./ReviewGroup";
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

// const ScheduleCard = () => {
export default StaffDetail;
