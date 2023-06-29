import { FC } from "react";
import { Formik, Form, FormikErrors } from "formik";
import { Button, Card, Typography } from "@mui/material";
import Input from "../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SecondFormProps {
  onRequestBack?: () => void;
}
const SecondForm: FC<SecondFormProps> = ({onRequestBack}) => {
  return (
    <Formik
      initialValues={{
        name: "",
        province: "",
        district: "",
        address: "",
        phone: "",
        birthday: "",
        cccd: "",
        avatar: "",
        gender: "",
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, handleChange, isSubmitting }) => (
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
                name="name"
                type="text"
                fullWidth
                id="name-input"
                placeholder="氏名"
                label="氏名*"
                error={!!errors.name && touched.name}
                helperText={touched.name && errors.name}
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
