import { useState } from "react";
import FirstForm, { RegisterOnSubmitType } from "./FirstForm";
import SecondForm from "./SecondForm";

const Register = () => {
  const [visiableForm, setVisiableForm] = useState<"first" | "second">("first");
  const handleFirstFormSubmit: RegisterOnSubmitType = async (values, onError) => {
    // onError({ email: "Email already exists" });
    // console.log(values);
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
