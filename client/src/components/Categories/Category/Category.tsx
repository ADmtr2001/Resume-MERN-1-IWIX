import React, { FC } from "react";

import { Link } from "react-router-dom";

import { Wrapper } from "./Category.styles";

import { ICategory } from "../../../types";

interface CategoryProps {
  category: ICategory;
}

const Category: FC<CategoryProps> = ({ category }) => {
  return (
    <Wrapper>
      <Link to={`/announcements?category=${category._id}`}>
        <img src={`${category.image}`} alt="category icon" />
        <h3>{category.name}</h3>
      </Link>
    </Wrapper>
  );
};

export default Category;
