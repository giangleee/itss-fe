import "./style.scss";
import { FC, useRef, useState } from "react";
import { Button, FormControl, FormHelperText, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Formik, Field, Form, FieldProps } from "formik";
import { validateRule } from "./ValidateRule";
import { JOB_TYPE } from "./JobTypeConst";
import { createRequest } from "../../api/request";
import NotificationComponent, { NotificationComponentRef } from "../../components/Notification";
import { useSelector } from "../../states";
interface TimeDetailInterface {
  hour: number;
  minute: number;
  meridiem: string;
}

interface TimeInterface {
  from: TimeDetailInterface;
  to: TimeDetailInterface;
}

interface createRequestInterface {
  requestDetail: string;
  time: TimeInterface;
  salary: number;
  requestJobType: number;
  otherNotes: string;
}

interface PayloadInterface {
  job_type: number;
  user_id: string;
  request_detail: {
    work_time: string;
    salary: number;
    policy: string;
    other_note?: string;
  };
}

const NewRequestView: FC = () => {
  const [hour] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [minutes] = useState<number[]>([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
  const [amOrPm] = useState<string[]>(["午前", "午後"]);

  const notiRef = useRef<NotificationComponentRef>(null);
  const { user } = useSelector((state) => state.auth);
  if (!user) return null;

  const initValues = (): createRequestInterface => {
    return {
      requestDetail: "",
      time: {
        from: {
          hour: 6,
          minute: 0,
          meridiem: "午前",
        },
        to: {
          hour: 9,
          minute: 0,
          meridiem: "午前",
        },
      },
      salary: 0,
      requestJobType: JOB_TYPE[0].value,
      otherNotes: "",
    };
  };

  const handleSave = async (value: createRequestInterface) => {
    console.log(user);

    const { from, to }: TimeInterface = value.time;
    const customWorkTime = `${from.hour}:${from.minute} ${from.meridiem} ~ ${to.hour}:${to.minute} ${to.meridiem}`;

    const payload: PayloadInterface = {
      job_type: value.requestJobType,
      user_id: user?._id,
      request_detail: {
        work_time: customWorkTime,
        salary: value.salary,
        policy: value.requestDetail,
        other_note: value.otherNotes,
      },
    };

    try {
      const { data } = await createRequest(payload);
      if (data?.message == "Create request successfully") {
        notiRef.current?.setState("成功した");
      }
    } catch (error) {
      notiRef.current?.setState("エラー");
    }
  };

  return (
    <div className="new-request__container">
      <h4>新しいリクエスト</h4>
      <Formik
        initialValues={initValues()}
        validationSchema={validateRule}
        onSubmit={handleSave}
      >
        <Form>
          <Field name="requestDetail">
            {({ field, meta }: FieldProps<createRequestInterface>) => (
              <div className="detail-container">
                <FormControl
                  fullWidth
                  error={Boolean(meta.touched && meta.error)}
                >
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
                      {...field}
                      fullWidth
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      inputProps={{}}
                    />
                    {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                  </Grid>
                </FormControl>
              </div>
            )}
          </Field>
          <FormControl fullWidth>
            <Grid item>
              <Typography
                variant="h5"
                component="h5"
                sx={{ padding: "5px" }}
                className="typo-custom"
              >
                時間
              </Typography>
              <div className="row">
                <div className="row container">
                  <div className="col-6 first__content flex items-center justify-between">
                    <div className="first__content-title">から</div>
                    <div className="first__content-hour">
                      <Field name="time.from.hour">
                        {({ field, meta }: FieldProps<createRequestInterface>) => (
                          <FormControl
                            sx={{ m: 1, minWidth: 60, textAlign: "center" }}
                            variant="standard"
                            error={Boolean(meta.touched && meta.error)}
                          >
                            <Select
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                            >
                              {hour.map((item) => (
                                <MenuItem
                                  value={item}
                                  key={item}
                                >
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                            {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                          </FormControl>
                        )}
                      </Field>
                    </div>
                    :
                    <div className="first__content-minute">
                      <Field name="time.from.minute">
                        {({ field, meta }: FieldProps<createRequestInterface>) => (
                          <FormControl
                            sx={{ m: 1, minWidth: 60, textAlign: "center" }}
                            variant="standard"
                            error={Boolean(meta.touched && meta.error)}
                          >
                            <Select
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                            >
                              {minutes.map((item) => (
                                <MenuItem
                                  value={item}
                                  key={item}
                                >
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                            {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                          </FormControl>
                        )}
                      </Field>
                    </div>
                    :
                    <div className="first__content-which-time">
                      <Field name="time.from.meridiem">
                        {({ field, meta }: FieldProps<createRequestInterface>) => (
                          <FormControl
                            sx={{ m: 1, minWidth: 60, textAlign: "center" }}
                            variant="standard"
                            error={Boolean(meta.touched && meta.error)}
                          >
                            <Select
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                            >
                              {amOrPm.map((item) => (
                                <MenuItem
                                  value={item}
                                  key={item}
                                >
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                            {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                          </FormControl>
                        )}
                      </Field>
                    </div>
                  </div>
                  <div className="col-6 second__content flex items-center justify-between">
                    <div className="second__content-title">まで</div>
                    <div className="second__content-hour">
                      {/* <FormControl
                                     sx={{ m: 1, minWidth: 60, textAlign: "center" }}
                                     variant="standard"
                                   >
                                     <Select
                                       labelId="demo-simple-select-label"
                                       id="demo-simple-select"
                                       label="Age"
                                     >
                                       {hour.map((item, i) => (
                                         <MenuItem
                                           key={i}
                                           value={item}
                                         >
                                           {item}
                                         </MenuItem>
                                       ))}
                                     </Select>
                                   </FormControl> */}
                      <Field name="time.to.hour">
                        {({ field, meta }: FieldProps<createRequestInterface>) => (
                          <FormControl
                            sx={{ m: 1, minWidth: 60, textAlign: "center" }}
                            variant="standard"
                            error={Boolean(meta.touched && meta.error)}
                          >
                            <Select
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                            >
                              {hour.map((item) => (
                                <MenuItem
                                  value={item}
                                  key={item}
                                >
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                            {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                          </FormControl>
                        )}
                      </Field>
                    </div>
                    :
                    <div className="second__content-minute">
                      <Field name="time.to.minute">
                        {({ field, meta }: FieldProps<createRequestInterface>) => (
                          <FormControl
                            sx={{ m: 1, minWidth: 60, textAlign: "center" }}
                            variant="standard"
                            error={Boolean(meta.touched && meta.error)}
                          >
                            <Select
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                            >
                              {minutes.map((item) => (
                                <MenuItem
                                  value={item}
                                  key={item}
                                >
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                            {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                          </FormControl>
                        )}
                      </Field>
                    </div>
                    :
                    <div className="second__content-which-time">
                      <Field name="time.to.meridiem">
                        {({ field, meta }: FieldProps<createRequestInterface>) => (
                          <FormControl
                            sx={{ m: 1, minWidth: 60, textAlign: "center" }}
                            variant="standard"
                            error={Boolean(meta.touched && meta.error)}
                          >
                            <Select
                              {...field}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                            >
                              {amOrPm.map((item) => (
                                <MenuItem
                                  value={item}
                                  key={item}
                                >
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                            {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                          </FormControl>
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </FormControl>

          <div className="flex gap-x-8">
            <Field name="salary">
              {({ field, meta }: FieldProps<createRequestInterface>) => (
                <FormControl
                  fullWidth
                  error={Boolean(meta.touched && meta.error)}
                >
                  
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h5"
                      sx={{ padding: "5px" }}
                      className="typo-custom"
                    >
                      給料
                    </Typography>
                    <TextField
                      {...field}
                      fullWidth
                      id="outlined-multiline-static"
                      defaultValue="Default Value"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      inputProps={{}}
                      InputProps={{
                        inputMode: "numeric",
                      }}
                      type="number"
                    />
                    {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                  </Grid>
                </FormControl>
              )}
            </Field>
            <Field name="requestJobType">
              {({ field, meta }: FieldProps<createRequestInterface>) => (
                <FormControl
                  fullWidth
                  error={Boolean(meta.touched && meta.error)}
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h5"
                      sx={{ padding: "5px" }}
                      className="typo-custom"
                    >
                      仕事
                    </Typography>
                    <Select
                      {...field}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      fullWidth
                    >
                      {JOB_TYPE.map((item) => (
                        <MenuItem
                          value={item.value}
                          key={item.id}
                        >
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                  </Grid>
                </FormControl>
              )}
            </Field>
          </div>

          <Field name="otherNotes">
            {({ field, meta }: FieldProps<createRequestInterface>) => (
              <div className="detail-container">
                <FormControl
                  fullWidth
                  error={Boolean(meta.touched && meta.error)}
                >
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
                      {...field}
                      fullWidth
                      id="outlined-multiline-static"
                      defaultValue="Default Value"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      inputProps={{}}
                    />
                    {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                  </Grid>
                </FormControl>
              </div>
            )}
          </Field>

          <div className="row button__container">
            <Button
              variant="contained"
              className="button"
              type="submit"
            >
              新しく作る
            </Button>
          </div>
        </Form>
      </Formik>
      <NotificationComponent ref={notiRef} />
    </div>
  );
};

export default NewRequestView;
