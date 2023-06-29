import { Button, Card, Typography } from "@mui/material";
import { Form, Formik, FormikErrors } from "formik";
import { Link } from "react-router-dom";
import Input from "../Input";
import { validateEmail, validatePassword } from "../validate";
const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={async (values) => {
        const errors: FormikErrors<typeof values> = {};
        const emailError = validateEmail(values.email);
        const passwordError = validatePassword(values.password);
        if (emailError) errors.email = emailError;
        if (passwordError) errors.password = passwordError;
        return errors;
      }}
      onSubmit={async (values, actions) => {
        console.log(values);
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ errors, touched, handleChange, isSubmitting }) => (
        <Form noValidate>
          <Card className="w-[500px] h-[550px] bg-[#ffffff6c] backdrop-blur-xl px-5 py-6 flex flex-col justify-evenly">
            <Typography
              variant="h3"
              className="text-center font-bold"
            >
              ログイン
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
            <Link
              className="font-medium text-[#3D59C3] hover:underline"
              to="/register"
            >
              新しいアカウント作成
            </Link>
            <Button
              disabled={isSubmitting}
              type="submit"
              className="mt-3 bg-[#ff7008]"
              variant="contained"
              style={{ color: "#fff", backgroundColor: "#ff7008" }}
            >
              ログイン
            </Button>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
