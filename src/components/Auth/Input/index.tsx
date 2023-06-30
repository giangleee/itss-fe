import { TextField, TextFieldProps } from "@mui/material";
import { type FC } from "react";

const Input: FC<TextFieldProps> = (props) => {
  const { label, id, ...rest } = props;
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-bold"
        htmlFor={id}
      >
        {label}
      </label>
      <TextField {...rest} lang="en"/>
    </div>
  );
};

export default Input;
