import React, { FC, useMemo } from "react";

import Select from "../../UI/Select/Select";

import { ICategory, IOption } from "../../../types";

interface CategorySelectProps {
  categories: ICategory[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelect: FC<CategorySelectProps> = ({
  categories,
  value,
  onChange,
}) => {
  let selectOptions: IOption[] = useMemo(() => {
    const options = categories.map((category) => {
      return { label: category.name, value: category._id };
    });
    return [{ label: "Any", value: "" }, ...options];
  }, [categories]);

  return (
    <Select
      name="category"
      label="Category"
      options={selectOptions}
      value={value}
      onChange={onChange}
      fullWidth
    />
  );
};

export default CategorySelect;
