import React, { FC, PropsWithChildren } from "react";

import { Wrapper } from "./Button.styles";

interface ButtonProps {}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;
