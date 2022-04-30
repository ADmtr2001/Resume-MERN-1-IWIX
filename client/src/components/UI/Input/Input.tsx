import React, { FC } from "react";

import { Wrapper } from "./Input.styles";

interface InputProps {
  fullWidth?: boolean;
  placeholder?: string;
  type?: "text" | "file" | "password" | "email";
}

const Input: FC<InputProps> = ({ fullWidth, placeholder, type = "text" }) => {
  return (
    <Wrapper fullWidth={fullWidth} placeholder={placeholder} type={type} />
  );
};

export default Input;
