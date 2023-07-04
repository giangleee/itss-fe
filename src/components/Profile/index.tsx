import "./style.scss";
import { Card, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "../../states";
import React, { useEffect } from "react";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [mode, setMode] = React.useState<string>("update");
  const [fullName, setFullName] = React.useState<string>("");
  const [date_of_birth, setBirth] = React.useState<string>("");
  const [cccd, setCccd] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [gender, setGender] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [province, setProvince] = React.useState<string>("");
  const [district, setDistrict] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  useEffect(() => {
    setFullName(user?.fullName ?? "");
    setBirth(user?.date_of_birth ?? "");
    setCccd(user?.cccd ?? "");
    setEmail(user?.email ?? "");
    setGender(user?.gender ?? "");
    setAddress(user?.address ?? "");
    setProvince(user?.province ?? "");
    setDistrict(user?.district ?? "");
    setPhoneNumber(user?.phoneNumber ?? "");
  }, [
    user?.address,
    user?.cccd,
    user?.date_of_birth,
    user?.district,
    user?.email,
    user?.fullName,
    user?.gender,
    user?.phoneNumber,
    user?.province,
  ]);
  console.log(user);
  
  function checkValidate(value: string): boolean {
    if (value?.length == 0 || value?.length >= 255) return false;
    return true;
  }

  // TODO: Sau khi chỉnh sửa profile xong thì nhớ dispatch action update thông tin user nhé(để những trang khác có thể lấy thông tin user mới nhất)
  if (!user) return null;
  return (
    <div className="profile-container">
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
            error={checkValidate(fullName)}
            fullWidth
            id="outlined-multiline-static"
            multiline
            rows={1}
            defaultValue={user.fullName}
            value={fullName}
            onBlur={(event) => {
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
          <TextField
            InputProps={{
              readOnly: mode === "view",
            }}
            fullWidth
            error={checkValidate(date_of_birth)}
            id="outlined-multiline-static"
            multiline
            rows={1}
            defaultValue={user.date_of_birth}
            value={date_of_birth}
            onBlur={(event) => {
              setBirth(event.target.value ?? user.date_of_birth);
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
            <b>識別番号</b>
          </Typography>
          <TextField
            InputProps={{
              readOnly: mode === "view",
            }}
            fullWidth
            error={checkValidate(cccd)}
            id="outlined-multiline-static"
            multiline
            rows={1}
            defaultValue={user.cccd}
            value={cccd}
            onBlur={(event) => {
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
          <TextField
            InputProps={{
              readOnly: mode === "view",
            }}
            fullWidth
            error={checkValidate(gender)}
            id="outlined-multiline-static"
            multiline
            rows={1}
            defaultValue={user.gender}
            value={gender}
            onBlur={(event) => {
              setGender(event.target.value ?? user.gender);
            }}
          />
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
            fullWidth
            id="outlined-multiline-static"
            multiline
            rows={1}
            defaultValue={user.email}
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
            fullWidth
            error={checkValidate(province)}
            id="outlined-multiline-static"
            multiline
            rows={1}
            defaultValue={user.province}
            value={province}
            onBlur={(event) => {
              setProvince(event.target.value ?? user.province);
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
            fullWidth
            error={checkValidate(district)}
            id="outlined-multiline-static"
            multiline
            rows={1}
            defaultValue={user.district}
            value={district}
            onBlur={(event) => {
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
            fullWidth
            error={checkValidate(address)}
            id="outlined-multiline-static"
            multiline
            rows={1}
            defaultValue={user.address}
            value={address}
            onBlur={(event) => {
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
            fullWidth
            error={checkValidate(phoneNumber)}
            id="outlined-multiline-static"
            multiline
            rows={1}
            defaultValue={user.phoneNumber}
            value={phoneNumber}
            onBlur={(event) => {
              setPhoneNumber(event.target.value ?? user.phoneNumber);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
