import React, { FC } from "react";

import { Wrapper } from "./Input.styles";

interface InputProps {
  name: string;
  label?: string;
  type?: "text" | "file" | "password" | "email" | "number";
  placeholder?: string;
  fullWidth?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  fullWidth,
  value,
  onChange,
}) => {
  return label ? (
    <label>
      {label}
      <Wrapper
        name={name}
        type={type}
        placeholder={placeholder}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        autoComplete="off"
        accept={type === "file" ? ".jpg,.jpeg,.png" : ""}
      />
    </label>
  ) : (
    <Wrapper
      name={name}
      type={type}
      placeholder={placeholder}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      autoComplete="off"
      accept={type === "file" ? ".jpg,.jpeg,.png" : ""}
    />
  );
};

export default Input;
