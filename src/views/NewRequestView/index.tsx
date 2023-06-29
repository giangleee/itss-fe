import "./style.scss";
import { FC, useState } from "react";
import { Button, FormControl, FormHelperText, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Formik, Field, Form, FieldProps } from "formik";
import { validateRule } from "./ValidateRule";

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
  salary: string;
  otherNotes: string;
}

const NewRequestView: FC = () => {
  const [hour, setHour] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [minutes, setMinutes] = useState<number[]>([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
  const [amOrPm] = useState<string[]>(["午前", "午後"]);

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
      salary: "",
      otherNotes: "",
    };
  };

  const handleSave = async (value: createRequestInterface) => {
    console.log(value);
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

          <Field name="salary">
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
                    />
                    {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
                  </Grid>
                </FormControl>
              </div>
            )}
          </Field>

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
    </div>
  );
};

export default NewRequestView;
