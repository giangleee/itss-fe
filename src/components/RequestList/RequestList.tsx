/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-debugger */
import { Autocomplete, Avatar, Button, List, ListItem, Pagination, Rating, TextField } from "@mui/material";
import "./style.scss";
import React, { useEffect, useState } from "react";
import { getListApplyStaff } from "../../api/request";
import { ceil, filter } from "lodash";
import { useParams } from "react-router-dom";
import Filter from "../Filter";
import { FilterType } from "../../types";

const ageList = [
  {
    value: 0,
    label: "18-30",
  },
  {
    value: 1,
    label: "30-45",
  },
  {
    value: 2,
    label: "45-60",
  },
];
const genderList = [
  {
    value: 0,
    label: "Male",
  },
  {
    value: 1,
    label: "Female",
  },
];
const ratingList = [
  {
    value: 0,
    label: "2+",
  },
  {
    value: 1,
    label: "3+",
  },
  {
    value: 2,
    label: "4+",
  },
];
const RequestList = () => {
  // const [age, setAge] = useState<number | null>(null);
  // const [gender, setGender] = useState<number | null>(null);
  // const [rating, setRating] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterType>({});
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const { request_id } = useParams();
  const calculate_age = (dob: any): number => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    if (!request_id) return;
    const getorder = async () => {
      const response = await getListApplyStaff(request_id);
      const { data: res } = response;

      setData(
        res?.data.sort((a: any, b: any) => {
          return a.rating_avg - b.rating_avg;
        }) ?? null,
      );
      setDisplayData(res?.data);
    };
    getorder();
  }, [request_id]);

  useEffect(() => {
    const handleFilter = ({ age, gender, star: rating }: FilterType) => {
      let filterData = [...data];
      if (age) {
        if (age === 30) {
          filterData = filterData?.filter((item: any) => {
            return calculate_age(item.date_of_birth) >= 18 && calculate_age(item.date_of_birth) <= 29;
          });
        } else if (age === 45) {
          filterData = filterData?.filter((item: any) => {
            return calculate_age(item.date_of_birth) >= 30 && calculate_age(item.date_of_birth) <= 44;
          });
        } else if (age === 60) {
          filterData = filterData?.filter((item: any) => {
            return calculate_age(item.date_of_birth) >= 45 && calculate_age(item.date_of_birth) <= 60;
          });
        }
      }

      if (gender) {
        if (gender === "Male") {
          filterData = filterData?.filter((item: any) => {
            return item.gender === "Male";
          });
        } else if (gender === "Female") {
          filterData = filterData?.filter((item: any) => {
            return item.gender === "Female";
          });
        }
      }

      if (rating) {
        if (rating === 2) {
          filterData = filterData?.filter((item: any) => {
            return item.rating_avg >= 2;
          });
        } else if (rating === 3) {
          filterData = filterData?.filter((item: any) => {
            return item.rating_avg >= 3;
          });
        } else if (rating === 4) {
          filterData = filterData?.filter((item: any) => {
            return item.rating_avg >= 4;
          });
        }
      }

      setDisplayData([
        ...filterData.sort((a: any, b: any) => {
          return a.rating_avg - b.rating_avg;
        }),
      ]);
      setCurrentPage(0);
    };
    handleFilter(filter);
  }, [data, filter]);
  return (
    <div className="container-fluid">
      <div className="request__container">
        <div className="request__container-header">
          <div className="flex flex-row items-center">
            <b>受信したリクエストの数: {displayData?.length}</b>
            <div className="flex-1">
              <Filter onChange={setFilter} />
            </div>
          </div>

          <div className="row py-0 my-0">
            <List sx={{ width: "100%" }}>
              {displayData.map((item: any, index: number) => {
                if (index === currentPage * 3 + 1 || index === currentPage * 3 + 2 || index === currentPage * 3 + 0)
                  return (
                    <ListItem
                      alignItems="flex-start"
                      className="my-2"
                      sx={{ width: "100%", bgcolor: "background.paper" }}
                      key={item._id}
                    >
                      <div className="row h-100 w-100">
                        <div className="col-3 align-self-center text-center  ps-5">
                          <Avatar
                            sx={{ width: 120, height: 120 }}
                            src={item.avatar}
                          />
                        </div>
                        <div className="col">
                          <div className="row">
                            <div className="d-flex w-100 justify-content-between">
                              <b>{item.fullName}</b>
                              {/* <small>ID: {item._id}</small> */}
                            </div>
                          </div>
                          <div className="row">
                            <span>性別: {item.gender}</span>
                          </div>
                          <div className="row">
                            <b>年: {calculate_age(item.date_of_birth)}</b>
                          </div>
                          <div className="row">
                            <b>アドレス: {item.address}</b>
                          </div>
                          <div className="row w-100 ">
                            <div className="col-6">
                              <Rating
                                name="half-rating"
                                value={item.rating_avg ?? 0}
                                precision={0.5}
                                size="large"
                                readOnly
                              />
                            </div>
                            <div className="col-6 p-0">
                              <div className="d-flex flex-row-reverse me-0 pe-0 w-100">
                                <Button
                                  className="px-3"
                                  size="small"
                                  variant="outlined"
                                  style={{
                                    borderColor: "#FF7008",
                                  }}
                                >
                                  削除
                                </Button>
                                <Button
                                  className="me-2 ms-2 px-3"
                                  size="small"
                                  variant="contained"
                                  style={{
                                    backgroundColor: "#FF7008",
                                  }}
                                >
                                  受け入れる
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ListItem>
                  );
              })}
            </List>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Pagination
            count={ceil(displayData.length / 3)}
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={(_, value: number) => {
              setCurrentPage(value - 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestList;
