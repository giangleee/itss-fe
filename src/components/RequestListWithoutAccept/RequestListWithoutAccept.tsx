/* eslint-disable no-debugger */
import { Avatar, Button, List, ListItem, Pagination, Rating, TextField } from "@mui/material";
import "./style.scss";
import React, { useEffect } from "react";
import { getListApplyStaff, getListProgress } from "../../api/request";
import { ceil } from "lodash";
import { useNavigate } from "react-router-dom";

const RequestListWithoutAccept = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(0);
  const [displayData, setDisplayData] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getorder = async () => {
      const response = await getListProgress();
      const { data: res } = response;
      console.log(res);
      setData(res?.data);
      setDisplayData(res?.data);
    };
    getorder();
  }, []);
  return (
    <div className="container-fluid">
      <div className="request__container">
        <div className="row request__container-header">
          <List
            className="pt-0"
            sx={{ width: "100%" }}
          >
            {displayData.map((item, index: number) => {
              const _id = item._id;
              if (index === currentPage * 2 + 1 || index === currentPage * 2 + 0)
                return (
                  <ListItem
                    key={index}
                    alignItems="flex-start"
                    className="mb-3"
                    sx={{
                      width: "100%",
                      bgcolor: "background.paper",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="w-100">
                      <div className="row h-100 w-100 mb-3">
                        <span>
                          <b>番号順: {index + 1}</b>
                        </span>
                      </div>

                      <div className="row h-100 w-100 my-2">
                        <div className="col-2  align-self-center">
                          <span>
                            <b>時間</b>
                          </span>
                        </div>
                        <div className="col-10 me-0 pe-0">
                          <div className="row w-100 pe-0">
                            <div className="col-7">
                              <div className="row w-100 pe-0">
                                <div className="col-6 p-0 m-0">
                                  <div className=" row w-100">
                                    <div className="col-4  align-self-center">
                                      <span>
                                        <b>から</b>
                                      </span>
                                    </div>
                                    <div className="col-8 px-0 mx-0">
                                      <TextField
                                        fullWidth
                                        InputProps={{
                                          readOnly: true,
                                        }}
                                        size="small"
                                        value={item.request_detail?.work_time?.split("~")[0]}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6 p-0 m-0">
                                  <div className="row w-100 ">
                                    <div className="col-4  align-self-center">
                                      <span>
                                        <b>まで</b>
                                      </span>
                                    </div>
                                    <div className="col-8 px-0 mx-0">
                                      <TextField
                                        InputProps={{
                                          readOnly: true,
                                        }}
                                        fullWidth
                                        size="small"
                                        value={item.request_detail?.work_time?.split("~")[1]}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-5 m-0 p-0">
                              <div className="row w-100 px-0 mx-0">
                                <div className="col-3  align-self-center">
                                  <span>
                                    <b>給料</b>
                                  </span>
                                </div>
                                <div className="col-9 m-0 p-0">
                                  <TextField
                                    InputProps={{
                                      readOnly: true,
                                    }}
                                    fullWidth
                                    size="small"
                                    value={item.request_detail?.salary}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row h-100 w-100 my-2">
                        <div className="col-2">
                          <span>
                            <b>仕事の詳細</b>
                          </span>
                        </div>
                        <div className="col-10 ms-0 ps-0">
                          <TextField
                            fullWidth
                            multiline
                            rows={3}
                            InputProps={{
                              readOnly: true,
                            }}
                            value={item.request_detail?.other_note}
                          />
                        </div>
                      </div>

                      <div className="row h-100 w-100 mt-3 mb-2">
                        <div className="col-6 p-0"></div>

                        <div className="col-6 p-0">
                          <div className="d-flex flex-row-reverse me-0 pe-0 w-100">
                            <Button
                              className="me-2 ms-2 px-3"
                              size="small"
                              variant="contained"
                              style={{
                                backgroundColor: "#FF7008",
                              }}
                              onClick={() => {
                                navigate(`${_id}/apply-staff`);
                              }}
                            >
                              見る
                            </Button>
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
            count={ceil(displayData.length / 2)}
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

export default RequestListWithoutAccept;
