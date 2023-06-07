/* eslint-disable no-debugger */
import {
  Autocomplete,
  Avatar,
  Button,
  List,
  ListItem,
  Pagination,
  Rating,
  TextField,
} from "@mui/material";
import "./style.scss";
import React, { useEffect } from "react";
import { getListApplyStaff } from "../../api/request";
import { ceil } from "lodash";

const RequestList = () => {
  const [age, setAge] = React.useState<number | null>(null);
  const [gender, setGender] = React.useState<number | null>(null);
  const [rating, setRating] = React.useState<number | null>(null);
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [displayData, setDisplayData] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);

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

  const calculate_age = (dob: any): number => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    const getorder = async () => {
      const response = await getListApplyStaff("647cc8ef3b110b431de84033");
      const { data: res } = response;

      setData(
        res?.data.sort((a: any, b: any) => {
          return a.rating_avg - b.rating_avg;
        }) ?? null
      );
      setDisplayData(res?.data);
    };
    getorder();
  }, []);

  const handleFilter = () => {
    let filterData = [...data];
    if (age != null) {
      if (age === 0) {
        filterData = filterData?.filter((item: any) => {
          return (
            calculate_age(item.date_of_birth) >= 18 &&
            calculate_age(item.date_of_birth) <= 29
          );
        });
      } else if (age === 1) {
        filterData = filterData?.filter((item: any) => {
          return (
            calculate_age(item.date_of_birth) >= 30 &&
            calculate_age(item.date_of_birth) <= 44
          );
        });
      } else if (age === 2) {
        filterData = filterData?.filter((item: any) => {
          return (
            calculate_age(item.date_of_birth) >= 45 &&
            calculate_age(item.date_of_birth) <= 60
          );
        });
      }
    }

    if (gender != null) {
      if (gender === 0) {
        filterData = filterData?.filter((item: any) => {
          return item.gender === "Male";
        });
      } else if (gender === 1) {
        filterData = filterData?.filter((item: any) => {
          return item.gender === "Female";
        });
      }
    }

    if (rating != null) {
      if (rating === 0) {
        filterData = filterData?.filter((item: any) => {
          return item.rating_avg >= 2;
        });
      } else if (rating === 1) {
        filterData = filterData?.filter((item: any) => {
          return item.rating_avg >= 3;
        });
      } else if (rating === 2) {
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

  return (
    <div className="container-fluid">
      <div>
        <div className="row">
          <div className="col-4 align-self-end">
            <b>受信したリクエストの数: {displayData?.length}</b>
          </div>
          <div className="col-8">
            <div className="row">
              {/* <div className="col-1">
              </div> */}

              <div className="col-3">
                <Autocomplete
                  id="gender-filter"
                  size="small"
                  options={genderList}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="性別"
                    />
                  )}
                  onChange={(event: any, newValue) => {
                    setGender(newValue?.value ?? null);
                  }}
                />
              </div>
              <div className="col-3">
                <Autocomplete
                  id="age-filter"
                  size="small"
                  options={ageList}
                  getOptionLabel={(option: any) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="年"
                    />
                  )}
                  onChange={(event: any, newValue: any) => {
                    setAge(newValue?.value ?? null);
                  }}
                />
              </div>
              <div className="col-3">
                <Autocomplete
                  id="rating-filter"
                  size="small"
                  options={ratingList}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="定格"
                    />
                  )}
                  onChange={(event: any, newValue: any) => {
                    setRating(newValue?.value ?? null);
                  }}
                />
              </div>
              <div className="col-3">
                <Button
                  className="w-100"
                  variant="contained"
                  color="success"
                  onClick={handleFilter}
                >
                  申し込み
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-0 my-0">
          <List sx={{ width: "100%" }}>
            {displayData.map((item: any, index: number) => {
              if (
                index === currentPage * 3 + 1 ||
                index === currentPage * 3 + 2 ||
                index === currentPage * 3 + 0
              )
                return (
                  <ListItem
                    alignItems="flex-start"
                    className="my-2"
                    sx={{ width: "100%", bgcolor: "background.paper" }}
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

        <div className="d-flex justify-content-center pt-3">
          <Pagination
            count={ceil(displayData.length / 3)}
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={(event: any, value: number) => {
              setCurrentPage(value - 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestList;
