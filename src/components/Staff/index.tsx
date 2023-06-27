import { Pagination } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Filter from "../Filter";
import StaffList from "./StaffList";
import { getListStaff } from "../../api/request";
import { FilterType, Staff } from "../../types";
import StaffDetail from "./detail";
const StaffLayout = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<StaffsView />}
      />
      <Route
        path="/:staff_id/*"
        element={<StaffDetail />}
      />
    </Routes>
  );
};
const StaffsView = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState<FilterType>({});
  const { data, isFetching, refetch } = useQuery<Staff[]>({
    queryKey: ["staffs", filter.age, filter.gender, filter.star],
    queryFn: () => getListStaff(filter),
    initialData: [],
    refetchOnWindowFocus: false,
  });
  const handleFilterChange = (query: FilterType) => {
    setFilter(query);
    refetch();
    setCurrentPage(0);
  };
  const getPageData = () => data.slice(currentPage * 3, (currentPage + 1) * 3);
  const calcPageLength = (length = 0) => Math.ceil(length / 3);
  return (
    <div className="bg-transparent w-full h-full flex flex-col items-stretch">
      <Filter onChange={handleFilterChange} />
      <StaffList
        isLoading={isFetching}
        data={getPageData()}
      />
      <Pagination
        className="mt-3 self-center"
        count={calcPageLength(data.length)}
        variant="outlined"
        shape="rounded"
        color="primary"
        page={Math.floor(currentPage + 1)}
        onChange={(_, value) => {
          setCurrentPage(value - 1);
        }}
      />
    </div>
  );
};

export default StaffLayout;
