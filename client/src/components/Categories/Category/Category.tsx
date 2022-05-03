import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../../types";

import { Wrapper } from "./Category.styles";

interface CategoryProps {
  category: ICategory;
}

const Category: FC<CategoryProps> = ({ category }) => {
  return (
    <Wrapper>
      <Link to={`/category-announcements?category=${category._id}`}>
        <img
          crossOrigin='anonymous'
          src={`http://localhost:5000/${category.image}`}
          alt='category icon'
        />
        <h3>{category.name}</h3>
      </Link>
    </Wrapper>
  );
};

export default Category;
