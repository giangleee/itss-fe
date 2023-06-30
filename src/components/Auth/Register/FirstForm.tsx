import { FC } from "react";
import { Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Input from "../Input";
import { Formik, Form, FormikErrors } from "formik";
import { validateEmail, validatePassword } from "../validate";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type RegisterValueType = {
  email: string;
  password: string;
  confirmPassword: string;
};
export type RegisterOnSubmitType = (
  values: RegisterValueType,
  onError: (errors: FormikErrors<RegisterValueType>) => void,
) => void | Promise<void>;
interface FirstFormProps {
  onSubmit: RegisterOnSubmitType;
}

const FirstForm: FC<FirstFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={
        {
          email: "",
          password: "",
          confirmPassword: "",
        } as RegisterValueType
      }
      validate={async (values) => {
        const errors: FormikErrors<RegisterValueType> = {};
        const emailError = validateEmail(values.email);
        const passwordError = validatePassword(values.password);
        if (emailError) errors.email = emailError;
        if (passwordError) errors.password = passwordError;
        if (values.password !== values.confirmPassword) errors.confirmPassword = "パスワードが一致しません";
        return errors;
      }}
      onSubmit={async (values, actions) => {
        try {
          await onSubmit(values, (errors) => {
            throw errors;
          });
        } catch (error) {
          actions.setErrors(error as FormikErrors<RegisterValueType>);
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      {({ errors, touched, isSubmitting, handleChange }) => (
        <Form
          noValidate
          className={isSubmitting ? "cursor-wait" : ""}
        >
          <Card className="w-[500px] h-[550px] bg-[#ffffff6c] backdrop-blur-xl px-5 py-6 flex flex-col justify-evenly">
            <Typography
              variant="h3"
              className="text-center font-bold"
            >
              登録
            </Typography>
            <Input
              name="email"
              type="email"
              fullWidth
              id="mail-input"
              placeholder="メールアドレス"
              label="メールアドレス"
              error={!!errors.email && touched.email}
              helperText={touched.email && errors.email}
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              fullWidth
              id="password-input"
              placeholder="パスワード"
              label="パスワード"
              error={!!errors.password && touched.password}
              helperText={touched.password && errors.password}
              onChange={handleChange}
            />
            <Input
              name="confirmPassword"
              type="password"
              fullWidth
              id="confirm-password-input"
              placeholder="パスワード確認"
              label="パスワード確認"
              error={!!errors.confirmPassword && touched.confirmPassword}
              helperText={touched.confirmPassword && errors.confirmPassword}
              onChange={handleChange}
            />
            <Link
              className="font-medium text-[#3D59C3] hover:underline"
              to="/login"
            >
              アカウントをお持ちの方はこちら
            </Link>
            <Button
              disabled={isSubmitting}
              type="submit"
              className="mt-3 bg-[#ff7008]"
              variant="contained"
              style={{ color: "#fff", backgroundColor: "#ff7008" }}
            >
              次へ
            </Button>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default FirstForm;
