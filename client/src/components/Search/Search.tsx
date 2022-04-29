import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import { Wrapper } from "./Search.styles";

import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <Wrapper>
      <Input fullWidth />
      <button>
        <span>Search</span> <BsSearch />
      </button>
    </Wrapper>
  );
};

export default Search;
