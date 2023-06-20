import "./style.scss";
import { FC, useEffect } from "react";
import { Button, FormControl, Grid, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const RequestInfo: FC = () => {
  const { request_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(request_id);
  }, []);
  return (
    <div className="new-request__container">
      <h4>リクエスト詳細</h4>
      <div className="detail-container">
        <FormControl
          fullWidth
          className="flex flex-row justify-between form-control__name"
        >
          <Grid
            item
            className="w-full"
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              スタッフ
            </Typography>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={1}
              defaultValue="Default Value"
            />
          </Grid>
          <Grid
            item
            className="w-full"
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              スターテス
            </Typography>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={1}
              defaultValue="Default Value"
            />
          </Grid>
        </FormControl>
      </div>
      <div className="detail-container">
        <FormControl fullWidth>
          <Grid item>
            <Typography
              variant="h5"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              仕事の詳細
            </Typography>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={3}
              defaultValue="Default Value"
            />
          </Grid>
        </FormControl>
      </div>
      {/* <SelectTimeComponent /> */}
      <div className="detail-container pt-2">
        <FormControl
          fullWidth
          className="flex flex-row justify-between form-control__name"
        >
          <Grid
            item
            className="w-full"
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              時間
            </Typography>
            <div className="flex items-center">
              <Grid
                item
                className="flex items-center justify-between"
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  から
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={1}
                  defaultValue="Default Value"
                  className="w-8/12"
                />
              </Grid>
              <Grid
                item
                className="flex items-center justify-between"
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  まで
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={1}
                  defaultValue="Default Value"
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
              variant="h5"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              給料
            </Typography>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={1}
              defaultValue="Default Value"
            />
          </Grid>
        </FormControl>
      </div>
      <div className="detail-container">
        <FormControl fullWidth>
          <Grid item>
            <Typography
              variant="h5"
              component="h5"
              sx={{ padding: "5px" }}
              className="typo-custom"
            >
              その他の注意事項
            </Typography>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              defaultValue="Default Value"
              rows={2}
            />
          </Grid>
        </FormControl>
      </div>
      <div className="flex justify-evenly button__container">
        <Button
          variant="contained"
          className="button"
          onClick={() => navigate("review")}
        >
          レビュー
        </Button>
        <Button
          variant="contained"
          className="button"
        >
          バック
        </Button>
      </div>
    </div>
  );
};

export default RequestInfo;
