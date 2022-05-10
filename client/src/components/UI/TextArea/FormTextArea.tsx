import React from "react";

import { Path, UseFormRegister } from "react-hook-form";

import { Wrapper } from "./TextAra.styles";

import FormInputOptions from "../../../types/Data/IFormFieldOptions";

interface TextAreaProps<T> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  options: FormInputOptions;
  error: string | undefined;
  rows: number;
}

function TextArea<T>({
  label,
  name,
  register,
  options = {},
  error,
  rows,
}: TextAreaProps<T>) {
  return (
    <label>
      {label}
      <Wrapper
        rows={rows}
        // @ts-ignore
        {...register(name, { ...options })}
        autoComplete="off"
      />
      <div className="input-error">{error || ""}</div>
    </label>
  );
}

export default TextArea;
