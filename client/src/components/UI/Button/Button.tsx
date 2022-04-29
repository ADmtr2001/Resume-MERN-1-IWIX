import React, { FC, PropsWithChildren } from "react";

import { Wrapper } from "./Button.styles";

interface ButtonProps {
  onClick?: () => void;
  isActive?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  isActive,
}) => {
  return (
    <Wrapper onClick={onClick} isActive={isActive}>
      {children}
    </Wrapper>
  );
};

export default Button;
