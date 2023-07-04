import { FC } from "react";
import { Formik, Form, FormikErrors } from "formik";
import { Button, Card, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Input from "../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faCircleArrowLeft, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { commonValidate } from "../validate";
export type InfoValueType = {
  fullName: string;
  province: string;
  district: string;
  address: string;
  phone: string;
  birthday: string;
  cccd: string;
  avatar?: string;
  gender: "Male" | "Female" | "Other";
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SecondFormProps {
  onRequestBack?: () => void;
  onSubmit: (values: InfoValueType) => void | Promise<void>;
}
const SecondForm: FC<SecondFormProps> = ({ onRequestBack, onSubmit }) => {
  return (
    <Formik
      initialValues={
        {
          fullName: "",
          province: "",
          district: "",
          address: "",
          phone: "",
          birthday: "",
          cccd: "",
          gender: "Other",
        } as InfoValueType
      }
      validate={async (values) => {
        const errors: FormikErrors<InfoValueType> = {};
        const nameError = commonValidate(values.fullName, "氏名");
        const provinceError = commonValidate(values.province, "市");
        const districtError = commonValidate(values.district, "区");
        const addressError = commonValidate(values.address, "住所");
        const phoneError = commonValidate(values.phone, "電話番号");
        const birthdayError = commonValidate(values.birthday, "誕生日");
        const cccdError = commonValidate(values.cccd, "証明番号");
        if (nameError) errors.fullName = nameError;
        if (provinceError) errors.province = provinceError;
        if (districtError) errors.district = districtError;
        if (addressError) errors.address = addressError;
        if (phoneError) errors.phone = phoneError;
        if (birthdayError) errors.birthday = birthdayError;
        if (cccdError) errors.cccd = cccdError;
        return errors;
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleChange, isSubmitting, setFieldValue, values: { avatar } }) => (
        <Card className="w-full h-full bg-[#ffffff6c] backdrop-blur-xl px-5 py-6">
          <FontAwesomeIcon
            size="2xl"
            icon={faCircleArrowLeft}
            className="absolute top-[25px] left-[55px] hover:cursor-pointer hover:scale-105"
            onClick={onRequestBack}
          />
          <Form
            className="w-full h-full flex flex-col items-center"
            noValidate
          >
            <Typography
              variant="h3"
              className="text-center font-bold"
            >
              情報
            </Typography>
            <div className="p-2 flex-1 w-full grid grid-cols-2 grid-rows-4 gap-x-5">
              <Input
                name="fullName"
                type="text"
                fullWidth
                id="name-input"
                placeholder="氏名"
                label="氏名*"
                error={!!errors.fullName && touched.fullName}
                helperText={touched.fullName && errors.fullName}
                onChange={handleChange}
              />
              <Input
                name="province"
                type="text"
                fullWidth
                id="province-input"
                placeholder="市"
                label="市*"
                error={!!errors.province && touched.province}
                helperText={touched.province && errors.province}
                onChange={handleChange}
              />
              <Input
                name="phone"
                type="phone"
                fullWidth
                id="phone-input"
                placeholder="電話番号"
                label="電話番号*"
                error={!!errors.phone && touched.phone}
                helperText={touched.phone && errors.phone}
                onChange={handleChange}
              />
              <Input
                name="district"
                type="text"
                fullWidth
                id="district-input"
                placeholder="区域"
                label="区域*"
                error={!!errors.district && touched.district}
                helperText={touched.district && errors.district}
                onChange={handleChange}
              />
              <Input
                name="address"
                type="text"
                fullWidth
                id="district-input"
                placeholder="アドレス"
                label="アドレス*"
                error={!!errors.address && touched.address}
                helperText={touched.address && errors.address}
                onChange={handleChange}
              />
              <Input
                name="cccd"
                type="text"
                fullWidth
                id="district-input"
                placeholder="証明番号"
                label="証明番号*"
                error={!!errors.cccd && touched.cccd}
                helperText={touched.cccd && errors.cccd}
                onChange={handleChange}
              />
              <div className="flex">
                <div className="w-3/5 flex flex-col gap-2">
                  <label className="font-bold">性別*</label>
                  <RadioGroup
                    name="gender"
                    className="flex flex-row"
                    onChange={handleChange}
                    defaultValue="Other"
                  >
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="女性"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="男性"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="その他"
                    />
                  </RadioGroup>
                </div>
                <div className="w-2/5 flex flex-col gap-2">
                  <label className="font-bold">アバター画像*</label>
                  <Button
                    variant="outlined"
                    size="medium"
                    className="w-full py-[15px] px-[14px] border-2"
                    startIcon={<FontAwesomeIcon icon={avatar ? faCircleCheck : faArrowUpFromBracket} />}
                  >
                    アップロード
                    <input
                      type="file"
                      accept="image/*"
                      className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = (e) => {
                            setFieldValue("avatar", e.target?.result);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">誕生日*</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    onChange={(v: Dayjs | null) => {
                      setFieldValue("birthday", v?.toISOString());
                    }}
                    slotProps={{
                      textField: {
                        helperText: touched.birthday && errors.birthday,
                        error: !!errors.birthday && touched.birthday,
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              className="w-96 bg-[#ff7008]"
              disabled={isSubmitting}
              style={{ color: "#fff", backgroundColor: "#ff7008" }}
            >
              登録
            </Button>
          </Form>
        </Card>
      )}
    </Formik>
  );
};

export default SecondForm;
