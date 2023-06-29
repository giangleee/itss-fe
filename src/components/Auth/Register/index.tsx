// import { Button, Card, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import Input from "../Input";
// import { Formik, Form, FormikErrors } from "formik";
// import { validateEmail, validatePassword } from "../validate";
import { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

const Register = () => {
  const [visiableForm, setVisiableForm] = useState<"first" | "second">("second");
  const handleFirstFormSubmit = async (values: { email: string; password: string; confirmPassword: string }) => {
    console.log(values);
    setVisiableForm("second");
  };
  return visiableForm === "first" ? (
    <FirstForm onSubmit={handleFirstFormSubmit} />
  ) : (
    <SecondForm
      onRequestBack={() => {
        setVisiableForm("first");
      }}
    />
  );
};

export default Register;
