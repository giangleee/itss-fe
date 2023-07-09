import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./style.scss";
import { useEffect } from "react";
import { getListOwnerHistoryRequest } from "../../api/request";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { endLoadRequest, selectRequest, startLoadRequest, useDispatch, useSelector } from "../../states";
import { Request } from "../../types";
const columns: { id: "id" | "name" | "time" | "status"; label: string; minWidth: string; align: "center" }[] = [
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
const displayDataMap = (data: Request[]) => {
  return data.map((item) => {
    return {
      id: item?.request_detail?.request_detail_id,
      name: item?.staff_detail[0]?.fullname,
      time: item?.request_detail?.request_detail_data.work_time,
      status: item?.request_detail?.request_detail_data.status,
      requestId: item?.request_detail?._id,
    };
  });
};
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
const STATUS = ["探し中", "実行中", "完了", "期間切れ"];
function getText(status: number): string {
  const rslt = STATUS[status];
  return rslt || "";
}

const RequestHistory = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, requests } = useSelector((state) => state.request);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(startLoadRequest());
    const getRequestHistory = async () => {
      if (!user) return;
      const response = await getListOwnerHistoryRequest(user._id);
      const { data: res } = response;
      console.log(res)
      dispatch(endLoadRequest(res?.data || []));
    };
    getRequestHistory();
  }, [dispatch, user]);

  return (
    <div>
      <div className="bg-white row ms-2 w-25 title text-center align-self-center mb-4">
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
              {!isLoading &&
                displayDataMap(requests).map((row, i) => {
                  const id = row?.requestId;
                  return (
                    <TableRow
                      className="mt-2"
                      hover
                      tabIndex={-1}
                      key={i}
                      sx={{ width: "100%", overflow: "hidden", height: "10%", border: "4px solid", cursor: "pointer" }}
                      onClick={() => {
                        const selectedReuqest = requests.find((item) => item.request_detail._id === id);
                        if (!selectedReuqest) return;
                        dispatch(selectRequest(selectedReuqest));
                        navigate(id);
                      }}
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
