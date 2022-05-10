import React, { FC } from "react";
import { Wrapper } from "./TextAra.styles";
import { Path, UseFormRegister } from "react-hook-form";

interface FormInputOptions {
  required?: string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
  validate?: (value: string) => boolean | string;
}

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
