import React, { FC } from "react";

import { Wrapper } from "./TextAra.styles";

interface TextAreaProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  rows: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextAreaProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  rows,
}) => {
  return label ? (
    <label>
      {label}
      <Wrapper
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </label>
  ) : (
    <Wrapper
      name={name}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  );
};

export default TextArea;
