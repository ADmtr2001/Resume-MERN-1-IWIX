import React, { FC, PropsWithChildren } from "react";

import { Wrapper } from "./Button.styles";

interface ButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  isActive,
  disabled,
  children,
}) => {
  return (
    <Wrapper onClick={onClick} isActive={isActive} disabled={disabled}>
      {children}
    </Wrapper>
  );
};

export default Button;
