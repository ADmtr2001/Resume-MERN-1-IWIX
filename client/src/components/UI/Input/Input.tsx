import React, { FC } from "react";

import { Wrapper } from "./Input.styles";

interface InputProps {
  name: string;
  label?: string;
  type?: "text" | "file" | "password" | "email";
  placeholder?: string;
  fullWidth?: boolean;
}

const Input: FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  fullWidth,
}) => {
  return label ? (
    <label>
      {label}
      <Wrapper
        name={name}
        type={type}
        placeholder={placeholder}
        fullWidth={fullWidth}
      />
    </label>
  ) : (
    <Wrapper
      name={name}
      type={type}
      placeholder={placeholder}
      fullWidth={fullWidth}
    />
  );
};

export default Input;
