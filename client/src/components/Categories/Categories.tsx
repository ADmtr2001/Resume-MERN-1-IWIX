import React from "react";
import { useAppSelector } from "../../hooks/redux";
import Loader from "../UI/Loader/Loader";

import { Wrapper } from "./Categories.styles";
import Category from "./Category/Category";

const Categories = () => {
  const { categories, isCategoriesLoading } = useAppSelector(
    (state) => state.category
  );

  const allCategory = (
    <Category
      category={{
        _id: "",
        name: "All",
        image: "/uploads/categoryImages/all-category-icon.jpg",
      }}
    />
  );

  return (
    <Wrapper>
      <h2 className='title'>Categories</h2>
      {isCategoriesLoading ? (
        <Loader />
      ) : (
        <div className='categories'>
          {categories.map((category) => (
            <Category key={category._id} category={category} />
          ))}
          {allCategory}
        </div>
      )}
    </Wrapper>
  );
};

export default Categories;
