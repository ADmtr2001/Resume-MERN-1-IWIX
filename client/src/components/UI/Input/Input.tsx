import React, { FC } from "react";

import { Wrapper } from "./Input.styles";

interface InputProps {
  fullWidth?: boolean;
}

const Input: FC<InputProps> = ({ fullWidth }) => {
  return <Wrapper fullWidth={fullWidth} />;
};

export default Input;
