import React, { FC, useMemo } from "react";
import { ICategory, IOption } from "../../../types";
import Select from "../../UI/Select/Select";

interface CategorySelectProps {
  categories: ICategory[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelect: FC<CategorySelectProps> = ({
  categories,
  onChange,
  value,
}) => {
  let selectOptions: IOption[] = useMemo(() => {
    const options = categories.map((category) => {
      return { label: category.name, value: category._id };
    });
    return [{ label: "Any", value: "" }, ...options];
  }, [categories]);

  return (
    <Select
      name='category'
      label='Category'
      options={selectOptions}
      fullWidth
      value={value}
      onChange={onChange}
    />
  );
};

export default CategorySelect;
