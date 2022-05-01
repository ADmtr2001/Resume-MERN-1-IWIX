import React, { FC } from "react";

import { Wrapper } from "./Input.styles";

interface InputProps {
  name: string;
  label?: string;
  type?: "text" | "file" | "password" | "email";
  placeholder?: string;
  fullWidth?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        autoComplete='off'
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
      autoComplete='off'
    />
  );
};

export default Input;
