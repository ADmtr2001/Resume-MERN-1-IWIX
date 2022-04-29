import React, { FC } from "react";

import { Wrapper } from "./Select.styles";

interface SelectProps {
  options: string[];
}

const Select: FC<SelectProps> = ({ options }) => {
  const generatedOptions = options.map((optionText) => (
    <option>{optionText}</option>
  ));

  return <Wrapper>{generatedOptions}</Wrapper>;
};

export default Select;
