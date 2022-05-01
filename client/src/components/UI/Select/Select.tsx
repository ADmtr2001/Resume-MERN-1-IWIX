import React, { FC } from "react";
import { IOption } from "../../../types";

import { Wrapper } from "./Select.styles";

interface SelectProps {
  name: string;
  label?: string;
  options: IOption[];
  fullWidth?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({
  name,
  label,
  options,
  fullWidth,
  value,
  onChange,
}) => {
  const generatedOptions = options.map((opt) => {
    return (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    );
  });

  return label ? (
    <label>
      {label}{" "}
      <Wrapper
        name={name}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
      >
        {generatedOptions}
      </Wrapper>
    </label>
  ) : (
    <Wrapper
      name={name}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
    >
      {generatedOptions}
    </Wrapper>
  );
};

export default Select;
