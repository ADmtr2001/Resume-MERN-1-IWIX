import React, { FC } from "react";

import { Wrapper } from "./Select.styles";

interface SelectProps {
  options: string[];
  fullWidth?: boolean;
}

const Select: FC<SelectProps> = ({ options, fullWidth }) => {
  const generatedOptions = options.map((optionText) => (
    <option key={optionText}>{optionText}</option>
  ));

  return <Wrapper fullWidth={fullWidth}>{generatedOptions}</Wrapper>;
};

export default Select;
