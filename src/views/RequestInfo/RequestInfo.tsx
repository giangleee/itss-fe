import "./style.scss";
import { Button, FormControl, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../states";
import { useEffect } from "react";
const STATUS = ["探し中", "実行中", "完了", "期間切れ"];
function getText(status: number): string {
  const rslt = STATUS[status];
  return rslt || "";
}

const RequestInfo = () => {
  const { selectedRequest: request } = useSelector((state) => state.request);
  const navigate = useNavigate();
  useEffect(() => {
    if (!request) {
      navigate("/history");
    }
  }, [navigate, request]);
  if (!request) {
    return null;
  }
  return (
    <div className="new-request__container">
      <h4>リクエスト詳細</h4>
      <div>
        <FormControl
          fullWidth
          className="flex flex-row justify-between form-control__name"
        >
          <Grid
            item
            className="w-full"
          >
            <Typography
              variant="subtitle1"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              <b>スタッフ</b>
            </Typography>
            <TextField
              InputProps={{
                readOnly: true,
              }}
              disabled={!request.staff_detail[0]}
              fullWidth
              id="outlined-multiline-static"
              rows={1}
              value={request.staff_detail[0]?.fullname}
              onClick={() => {
                navigate(`/staff/${request.staff_detail[0]?._id}`);
              }}
            />
          </Grid>
          <Grid
            item
            className="w-full"
          >
            <Typography
              variant="subtitle1"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              <b>スターテス</b>
            </Typography>
            <TextField
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={1}
              defaultValue={getText(request.request_detail?.request_detail_data.status)}
            />
          </Grid>
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              <b>仕事の詳細</b>
            </Typography>
            <TextField
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={3}
              value={request.request_detail?.request_detail_data.policy}
            />
          </Grid>
        </FormControl>
      </div>
      {/* <SelectTimeComponent /> */}
      <div className=" pt-2">
        <FormControl
          fullWidth
          className="flex flex-row justify-between form-control__name"
        >
          <Grid
            item
            className="w-full"
          >
            <Typography
              variant="subtitle1"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              <b>時間</b>
            </Typography>
            <div className="flex items-center">
              <Grid
                item
                className="flex items-center justify-between"
              >
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>から</b>
                </Typography>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={1}
                  defaultValue={request.request_detail.request_detail_data.work_time.split("~")[0]}
                  className="w-8/12"
                />
              </Grid>
              <Grid
                item
                className="flex items-center justify-between"
              >
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>まで</b>
                </Typography>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={1}
                  defaultValue={request.request_detail?.request_detail_data.work_time.split("~")[1]}
                  className="w-8/12"
                />
              </Grid>
            </div>
          </Grid>
          <Grid
            item
            className="w-full"
          >
            <Typography
              variant="subtitle1"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              <b>給料</b>
            </Typography>
            <TextField
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={1}
              defaultValue={request.request_detail?.request_detail_data.salary}
            />
          </Grid>
        </FormControl>
      </div>
      <div>
        <FormControl fullWidth>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="h6"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              <b>その他の注意事項</b>
            </Typography>
            <TextField
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              id="outlined-multiline-static"
              value={request.request_detail?.request_detail_data.other_note}
              rows={2}
            />
          </Grid>
        </FormControl>
      </div>
      <div className="d-flex justify-content-evenly button__container">
        {request.staff_detail[0]?._id ? (
          <Button
            variant="contained"
            className="button"
            onClick={() => navigate(`review/${request.staff_detail[0]?._id}`)}
          >
            レビュー
          </Button>
        ) : (
          ""
        )}

        <Button
          variant="contained"
          className="button"
          onClick={() => navigate(-1)}
        >
          バック
        </Button>
      </div>
    </div>
  );
};

export default RequestInfo;
