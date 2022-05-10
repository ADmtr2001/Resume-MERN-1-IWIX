import React from "react";

import { Path, UseFormRegister } from "react-hook-form";

import { Wrapper } from "./Input.styles";

import IFormFieldOptions from "../../../types/Data/IFormFieldOptions";

interface FormInputProps<T> {
  label: string;
  type?: "text" | "file" | "password" | "email" | "number";
  name: Path<T>;
  register: UseFormRegister<T>;
  options: IFormFieldOptions;
  error: string | undefined;
  fullWidth: boolean;
}

function FormInput<T>({
  label,
  type = "text",
  name,
  register,
  options = {},
  error,
  fullWidth,
}: FormInputProps<T>) {
  return (
    <>
      <label>
        {label}
        <Wrapper
          //@ts-ignore
          {...register(name, { ...options })}
          fullWidth={fullWidth}
          type={type}
          autoComplete="off"
          accept={type === "file" ? ".jpg,.jpeg,.png" : ""}
        />
      </label>
      <div className="input-error">{error || ""}</div>
    </>
  );
}

export default FormInput;
