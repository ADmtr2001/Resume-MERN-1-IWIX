import React from "react";

import Loader from "../UI/Loader/Loader";
import Category from "./Category/Category";

import { useAppSelector } from "../../hooks/redux";

import { Wrapper } from "./Categories.styles";

const Categories = () => {
  const { categories, isCategoriesLoading } = useAppSelector(
    (state) => state.category
  );

  const allCategory = (
    <Category
      category={{
        _id: "",
        name: "All",
        image:
          "https://res.cloudinary.com/dncefjklc/image/upload/v1652282571/Categories/zbxlbyilorfywl4dpssv.jpg",
      }}
    />
  );

  return (
    <Wrapper>
      <h2 className="categories-title">Categories</h2>
      {isCategoriesLoading ? (
        <Loader />
      ) : (
        <div className="categories">
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
