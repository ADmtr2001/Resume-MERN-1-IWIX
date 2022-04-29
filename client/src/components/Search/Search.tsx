import React from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import { Wrapper } from "./Search.styles";

const Search = () => {
  return (
    <Wrapper>
      <Input fullWidth />
      <button>Hello</button>
    </Wrapper>
  );
};

export default Search;
