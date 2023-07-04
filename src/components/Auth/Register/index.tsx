import { useEffect, useState } from "react";
import FirstForm, { RegisterOnSubmitType } from "./FirstForm";
import SecondForm from "./SecondForm";
import { UserForm } from "../../../types";
import { checkValidEmail, register } from "../../../api/request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formD, setFormD] = useState<UserForm>({});
  const [visiableForm, setVisiableForm] = useState<"first" | "second" | "end">("first");
  const handleFirstFormSubmit: RegisterOnSubmitType = async (values, onError) => {
    setFormD((p) => ({ ...p, ...values }));
    await checkValidEmail(values.email);
    setVisiableForm("second");
  };
  useEffect(() => {
    if (visiableForm !== "end") return;
    console.log(formD);
    register(formD)
      .then(() => {
        toast.success("登録成功しました。", { autoClose: 1500 });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch(() => {
        toast.error("登録失敗しました。", { autoClose: 1500 });
      });
  }, [visiableForm, formD, navigate]);
  return visiableForm === "first" ? (
    <FirstForm onSubmit={handleFirstFormSubmit} />
  ) : (
    <SecondForm
      onRequestBack={() => {
        setVisiableForm("first");
      }}
      onSubmit={(values) => {
        setFormD((p) => ({ ...p, ...values }));
        setVisiableForm("end");
      }}
    />
  );
};

export default Register;
