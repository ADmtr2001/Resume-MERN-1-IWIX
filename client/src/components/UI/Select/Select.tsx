import React, { FC } from "react";

import { Wrapper } from "./Select.styles";

interface SelectProps {
  name: string;
  label?: string;
  options: string[];
  fullWidth?: boolean;
}

const Select: FC<SelectProps> = ({ name, label, options, fullWidth }) => {
  const generatedOptions = options.map((optionText) => (
    <option key={optionText}>{optionText}</option>
  ));

  return label ? (
    <label>
      {label}{" "}
      <Wrapper name={name} fullWidth={fullWidth}>
        {generatedOptions}
      </Wrapper>
    </label>
  ) : (
    <Wrapper name={name} fullWidth={fullWidth}>
      {generatedOptions}
    </Wrapper>
  );
};

export default Select;
