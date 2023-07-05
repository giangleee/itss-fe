import "./style.scss";
import { FC, useEffect } from "react";
import { Button, FormControl, Grid, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { getRequestById } from "../../api/request";

const RequestInfo: FC = () => {
  const [request, setRequest] = React.useState<any>();
  const { request_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getRequest = async () => {
      const response = await getRequestById(request_id!);
      const { data: res } = response;
      console.log(res?.data);
      setRequest(res?.data[0]);
      console.log(request?.request_detail?.salary);
    };
    getRequest();
  }, []);
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
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={1}
              defaultValue={request?.request_detail?.staff_detail?.fullname}
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
              defaultValue={request?.request_detail?.status == 1 ? "実行中" : "完了"}
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
              defaultValue={request?.request_detail?.policy}
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
                  defaultValue={request?.request_detail?.work_time.split("~")[0]}
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
                  defaultValue={request?.request_detail?.work_time.split("~")[1]}
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
              defaultValue={request?.request_detail?.salary}
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
              defaultValue={request?.request_detail?.other_note}
              rows={2}
            />
          </Grid>
        </FormControl>
      </div>
      <div className="d-flex justify-content-evenly button__container">
        {request?.request_detail?.staff_detail?._id ? (
          <Button
            variant="contained"
            className="button"
            onClick={() => navigate(`review/${request?.request_detail?.staff_detail?._id}`)}
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
