/* eslint-disable no-debugger */
import "./style.scss";
import { Avatar, Button, Card, FormControlLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { loginSuccess, useDispatch, useSelector } from "../../states";
import React, { useEffect } from "react";
import { updateUserInfo } from "../../api/request";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { toast } from "react-toastify";
import { faCircleCheck, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultavatar from "../../assets/img/avatar.png";

const Profile = () => {
  // eslint-disable-next-line no-debugger
  const [mode, setMode] = React.useState<string>("view");
  const [fullName, setFullName] = React.useState<string>("");
  const [date_of_birth, setBirth] = React.useState<string>("");
  const [cccd, setCccd] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [gender, setGender] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [province, setProvince] = React.useState<string>("");
  const [district, setDistrict] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [avatar, setAvatar] = React.useState<string>("");
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  let payload: any;
  const validationText = "Không được bỏ trống";
  const validationTextPhoneNumber = "Nhập đúng định dạng";
  useEffect(() => {
    setAvatar(user?.avatar ?? "312132");
    setFullName(user?.fullName ?? "");
    setBirth(user?.dateOfBirth ?? "");
    setCccd(user?.cccd ?? "");
    setEmail(user?.email ?? "");
    setGender(user?.gender ?? "");
    setAddress(user?.address ?? "");
    setProvince(user?.city ?? "Ha Noi");
    setDistrict(user?.district ?? "");
    setPhoneNumber(user?.phoneNumber ?? "1234567890");
    setValue(dayjs(user?.dateOfBirth ?? ""));
  }, []);
  const handleSubmit = async (event: any) => {
    payload = {
      fullName: fullName,
      cccd: cccd,
      gender: gender,
      date_of_birth: date_of_birth, //YYYY-MM-DD
      address: address,
      phone_number: phoneNumber,
      city: province,
      district: district,
      avatar: avatar,
    };
    try {
      const { data } = await updateUserInfo(user!._id, payload);
      if (data.message == "Update user successfully") {
        toast.success("成功した!");
        dispatch(loginSuccess(data.data));
      }
    } catch (error) {
      toast.error("エラー!");
    }
  };

  function checkValidate(value: string): boolean {
    if (value?.length == 0 || value?.length >= 255) return true;
    return false;
  }

  function phoneNumberValidate(value: string): boolean {
    const phoneno = /^\d{10}$/;
    if (value.match(phoneno)) {
      return false;
    } else {
      return true;
    }
  }

  // TODO: Sau khi chỉnh sửa profile xong thì nhớ dispatch action update thông tin user nhé(để những trang khác có thể lấy thông tin user mới nhất)
  if (!user) return null;
  return (
    <div className="profile-container">
      <div className="row">
        <div className="col-11">
          <div>
            <h4>個人情報</h4>
            <div className="row">
              <div className="col-6">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>氏名</b>
                </Typography>
                <TextField
                  InputProps={{
                    readOnly: mode === "view",
                  }}
                  error={mode === "update" && checkValidate(fullName)}
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={1}
                  size="small"
                  value={fullName}
                  helperText={mode === "update" && checkValidate(fullName) ? validationText : ""}
                  onChange={(event: any) => {
                    setFullName(event.target.value ?? user.fullName);
                  }}
                />
              </div>
              <div className="col-6">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>誕生日</b>
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{ width: "100%" }}
                    readOnly={mode === "view"}
                    slotProps={{
                      textField: {
                        helperText: mode === "update" && checkValidate(date_of_birth) ? "DD/MM/YYYY" : "",
                        size: "small",
                      },
                    }}
                    format="YYYY/MM/DD"
                    defaultValue={dayjs(user.dateOfBirth)}
                    value={value}
                    onChange={(date) => {
                      setValue(date);
                      setBirth(date?.format("YYYY-MM-DD") ?? user.dateOfBirth);
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>識別番号</b>
                </Typography>
                <TextField
                  InputProps={{
                    readOnly: mode === "view",
                  }}
                  size="small"
                  fullWidth
                  error={mode === "update" && checkValidate(cccd)}
                  id="outlined-multiline-static"
                  multiline
                  helperText={mode === "update" && checkValidate(cccd) ? validationText : ""}
                  rows={1}
                  value={cccd}
                  onChange={(event: any) => {
                    setCccd(event.target.value ?? user.cccd);
                  }}
                />
              </div>
              <div className="col-6">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>性別</b>
                </Typography>
                {/* <TextField
                  InputProps={{
                    readOnly: mode === "view",
                  }}
                  size="small"
                  fullWidth
                  error={mode === "view" && checkValidate(gender)}
                  id="outlined-multiline-static"
                  multiline
                  helperText={ mode==='update' && checkValidate(gender) ? validationText : ""}
                  rows={1}
                  value={gender}
                  onChange={(event: any) => {
                    setGender(event.target.value ?? user.gender);
                  }}
                /> */}
                <RadioGroup
                  name="gender"
                  className="flex flex-row"
                  onChange={(event: any) => {
                    setGender(event.target.value ?? user.gender);
                  }}
                  defaultValue="Other"
                >
                  <FormControlLabel
                    checked={gender === "Female"}
                    value="Female"
                    control={<Radio />}
                    label="女性"
                  />
                  <FormControlLabel
                    checked={gender === "Male"}
                    value="Male"
                    control={<Radio />}
                    label="男性"
                  />
                  <FormControlLabel
                    checked={gender === "Other"}
                    value="Other"
                    control={<Radio />}
                    label="その他"
                  />
                </RadioGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>メール</b>
                </Typography>
                <TextField
                  InputProps={{
                    readOnly: true,
                  }}
                  size="small"
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={1}
                  value={email}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>市</b>
                </Typography>
                <TextField
                  InputProps={{
                    readOnly: mode === "view",
                  }}
                  size="small"
                  fullWidth
                  error={mode === "update" && checkValidate(province)}
                  id="outlined-multiline-static"
                  multiline
                  helperText={mode === "update" && checkValidate(province) ? validationText : ""}
                  rows={1}
                  value={province}
                  onChange={(event: any) => {
                    setProvince(event.target.value ?? user.city);
                  }}
                />
              </div>
              <div className="col-6">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>区</b>
                </Typography>
                <TextField
                  InputProps={{
                    readOnly: mode === "view",
                  }}
                  size="small"
                  fullWidth
                  error={mode === "update" && checkValidate(district)}
                  id="outlined-multiline-static"
                  multiline
                  helperText={mode === "update" && checkValidate(district) ? validationText : ""}
                  rows={1}
                  value={district}
                  onChange={(event: any) => {
                    setDistrict(event.target.value ?? user.district);
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>アドレス</b>
                </Typography>
                <TextField
                  InputProps={{
                    readOnly: mode === "view",
                  }}
                  size="small"
                  fullWidth
                  error={mode === "update" && checkValidate(address)}
                  id="outlined-multiline-static"
                  multiline
                  helperText={mode === "update" && checkValidate(address) ? validationText : ""}
                  rows={1}
                  value={address}
                  onChange={(event: any) => {
                    setAddress(event.target.value ?? user.address);
                  }}
                />
              </div>
              <div className="col-6">
                <Typography
                  variant="subtitle1"
                  component="h5"
                  sx={{ padding: "5px" }}
                  className="typo-custom"
                >
                  <b>電話番号</b>
                </Typography>
                <TextField
                  InputProps={{
                    readOnly: mode === "view",
                  }}
                  size="small"
                  fullWidth
                  error={(mode === "update" && checkValidate(phoneNumber)) || phoneNumberValidate(phoneNumber)}
                  id="outlined-multiline-static"
                  multiline
                  helperText={
                    (mode === "update" && checkValidate(phoneNumber)) || phoneNumberValidate(phoneNumber)
                      ? validationTextPhoneNumber
                      : ""
                  }
                  rows={1}
                  value={phoneNumber}
                  onChange={(event: any) => {
                    setPhoneNumber(event.target.value ?? user.phoneNumber);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 mt-2">
          <Avatar
            sx={{ width: 65, height: 65 }}
            src={user.avatar}
          />
          {mode === "update" ? (
            <Button
              variant="outlined"
              size="medium"
              className="w-full border-2 mt-2"
              startIcon={<FontAwesomeIcon icon={avatar ? faCircleCheck : faArrowUpFromBracket} />}
            >
              <input
                type="file"
                accept="image/*"
                className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (e) => {
                      const dataUrl = e.target?.result as string;
                      setAvatar(dataUrl);
                    };
                  }
                }}
              />
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="row mt-3 mb-3">
        {mode === "view" ? (
          <div className="flex justify-evenly button__container">
            <Button
              variant="contained"
              sx={{
                fontSize: "1rem",
                width: "300px",
                height: "45px",
              }}
              style={{
                backgroundColor: "#FF7008",
              }}
              className="button"
              onClick={() => setMode("update")}
            >
              編集
            </Button>
          </div>
        ) : (
          <div className="flex justify-evenly button__container">
            <Button
              sx={{
                fontSize: "1rem",
                width: "150px",
                height: "45px",
              }}
              size="large"
              variant="contained"
              style={{
                backgroundColor: "#FF7008",
              }}
              onClick={handleSubmit}
            >
              編集する
            </Button>
            <Button
              sx={{
                fontSize: "1rem",
                width: "150px",
                height: "45px",
              }}
              className="px-3"
              size="large"
              // onClick={() => navigate(`history/${request_id}`, {replace: true})}
              onClick={() => setMode("view")}
              variant="outlined"
              style={{
                borderColor: "#FF7008",
              }}
            >
              バック
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
