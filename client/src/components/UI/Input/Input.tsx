import React, { FC } from "react";

import { Wrapper } from "./Input.styles";

interface InputProps {
  fullWidth?: boolean;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ fullWidth, placeholder }) => {
  return <Wrapper fullWidth={fullWidth} placeholder={placeholder} />;
};

export default Input;
