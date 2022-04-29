import React from "react";

import { Wrapper } from "./Categories.styles";
import Category from "./Category/Category";

const Categories = () => {
  return (
    <Wrapper>
      <h2 className='title'>Categories</h2>
      <div className='categories'>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </Wrapper>
  );
};

export default Categories;
