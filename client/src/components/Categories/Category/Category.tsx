import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./Category.styles";

const Category = () => {
  return (
    <Wrapper>
      <Link to='/user'>
        <img
          src='https://as1.ftcdn.net/v2/jpg/01/92/21/40/1000_F_192214085_QnQ58x0ZKRLSUEgarcjVHNWrnmH8uWTA.jpg'
          alt='category icon'
        />
        <h3>Category</h3>
      </Link>
    </Wrapper>
  );
};

export default Category;
