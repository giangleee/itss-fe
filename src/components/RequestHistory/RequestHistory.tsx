/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-debugger */
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./style.scss";
import { useEffect } from "react";
import { getListOwnerHistoryRequest } from "../../api/request";
import React from "react";
import { useNavigate } from "react-router-dom";
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
  const [displayData, setDisplayData] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getRequestHistory = async () => {
      const response = await getListOwnerHistoryRequest("648f3b20908304001c871052");
      const { data: res } = response;

      setData(res?.data);
      setDisplayData(
        res?.data.map((item: any) => {
          return {
            id: item?._id,
            name: item?.staff_detail?.fullname,
            time: item?.request_detail?.request_detail_data.work_time,
            status: item?.request_detail?.request_detail_data.status,
          };
        }),
      );
    };
    getRequestHistory();
  }, []);

  return (
    <div>
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
                const id = row.id;
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={i}
                    sx={{ width: "100%", overflow: "hidden", height: "10%", border: "4px solid", cursor: "pointer" }}
                    onClick={() => navigate(id)}
                  >
                    {columns.map((column) => {
                      let value = row[column.id];
                      if (column.id === "status") value = row[column.id] === 1 ? "実行中" : "完了";

                      const statusClass =
                        column.id === "status" ? (row[column.id] === 1 ? "inActive" : "active") : null;
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
