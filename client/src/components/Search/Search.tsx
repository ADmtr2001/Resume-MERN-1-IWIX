import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import { Wrapper } from "./Search.styles";

import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("searchQuery") || ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setSearchParams({ ...searchParams, searchQuery });
  }, [searchQuery, searchParams, setSearchParams]);

  return (
    <Wrapper>
      <form>
        <Input
          name='search'
          fullWidth
          placeholder='Search for anything...'
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
    </Wrapper>
  );
};

export default Search;
