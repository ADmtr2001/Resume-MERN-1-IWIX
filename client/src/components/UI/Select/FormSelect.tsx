import React from "react";

import { Path, UseFormRegister } from "react-hook-form";

import { Wrapper } from "./Select.styles";

import { IOption } from "../../../types";

interface FormSelectProps<T> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  options: IOption[];
  error?: string;
  fullWidth?: boolean;
}

function FormSelect<T>({
  label,
  name,
  register,
  options,
  error,
  fullWidth,
}: FormSelectProps<T>) {
  const generatedOptions = options.map((opt) => {
    return (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    );
  });

  return (
    <>
      <label>
        {label}
        <Wrapper {...register(name)} fullWidth={fullWidth}>
          {generatedOptions}
        </Wrapper>
      </label>
      <div className="input-error">{error || ""}</div>
    </>
  );
}

export default FormSelect;
