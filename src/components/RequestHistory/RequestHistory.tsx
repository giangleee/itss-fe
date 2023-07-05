/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-debugger */
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./style.scss";
import { useEffect } from "react";
import { getListOwnerHistoryRequest } from "../../api/request";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "../../states";
const columns: readonly any[] = [
  { id: "id", label: "Id", minWidth: "20%", align: "center" },
  { id: "name", label: "スタッフ", minWidth: "30%", align: "center" },
  { id: "time", label: "時間", minWidth: "30%", align: "center" },
  {
    id: "status",
    label: "スターテス",
    minWidth: "20%",
    align: "center",
  },
];
const RequestHistory = () => {
  const { user } = useSelector((state) => state.auth);
  const [displayData, setDisplayData] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getRequestHistory = async () => {
      const response = await getListOwnerHistoryRequest(user!._id);
      const { data: res } = response;

      setData(res?.data);
      setDisplayData(
        res?.data.map((item: any) => {
          return {
            id: item?._id,
            name: item?.staff_detail[0]?.fullname,
            time: item?.request_detail?.request_detail_data.work_time,
            status: item?.request_detail?.request_detail_data.status,
            requestId: item?.request_detail?._id,
          };
        }),
      );
    };
    getRequestHistory();
  }, []);

  function getClass(status: number): string {
    switch (status) {
      case 1:
        return "inActive";
      case 2:
        return "active";
      case 0:
        return "pending";
      case 3:
        return "ended";
      default:
        return "";
        break;
    }
  }

  function getText(status: number): string {
    switch (status) {
      case 1:
        return "実行中";
      case 2:
        return "完了";
      case 0:
        return "探し中";
      case 3:
        return "期間切れ";
      default:
        return "";
        break;
    }
  }

  return (
    <div>
      <div className="bg-white row ms-2 w-25 title text-center align-self-center mb-4">
        {" "}
        <span className="align-self-center">
          <b>
            <FontAwesomeIcon
              className="pe-2"
              icon={faUser}
            />
            リクエスト履歴{" "}
          </b>
        </span>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden", height: "100% !improtant", border: "4px solid" }}>
        <TableContainer sx={{ height: "100%" }}>
          <Table
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ border: "2px solid" }}
                    className="py-2 my-2"
                  >
                    <b className="h5">{column.label}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {displayData.map((row, i) => {
                const id = row?.requestId;
                return (
                  <TableRow
                    className="mt-2"
                    hover
                    tabIndex={-1}
                    key={i}
                    sx={{ width: "100%", overflow: "hidden", height: "10%", border: "4px solid", cursor: "pointer" }}
                    onClick={() => navigate(id)}
                  >
                    {columns.map((column) => {
                      let value = row[column.id];
                      if (column.id === "status") value = getText(row[column.id]);

                      const statusClass = column.id === "status" ? getClass(row[column.id]) : null;
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ border: "2px solid" }}
                          className={`py-2 my-2 h5 ${statusClass}`}
                        >
                          <b>{value}</b>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default RequestHistory;
