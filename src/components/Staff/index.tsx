import { Pagination } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Filter from "./Filter";
import StaffList from "./StaffList";
import { getListStaff } from "../../api/request";
import { Staff } from "../../types";
const StaffLayout = () => {
  return (
    <div className="bg-transparent w-full h-full flex flex-col items-stretch">
      <Routes>
        <Route
          path="/"
          element={<StaffsView />}
        />
        <Route
          path="/:staff_id"
          element={<StaffDetail />}
        />
      </Routes>
    </div>
  );
};
const StaffsView = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState<{ gender?: string; age?: number; star?: number }>({});
  const { data, isFetching, refetch } = useQuery<Staff[]>({
    queryKey: ["staffs"],
    queryFn: () => getListStaff(filter),
    initialData: [],
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    refetch();
    console.log(filter);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.age, filter.gender, filter.star]);
  return (
    <>
      <Filter
        onChange={(query) => {
          setFilter(query);
        }}
      />
      <StaffList
        isLoading={isFetching}
        data={data.slice(currentPage * 3, (currentPage + 1) * 3)}
      />
      <Pagination
        className="mt-3 self-center"
        count={Math.ceil((data?.length || 0) / 3)}
        variant="outlined"
        shape="rounded"
        color="primary"
        onChange={(_, value) => {
          setCurrentPage(value - 1);
        }}
      />
    </>
  );
};
const StaffDetail = () => {
  return <></>;
};

export default StaffLayout;
