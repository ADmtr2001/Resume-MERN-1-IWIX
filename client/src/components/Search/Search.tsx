import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import { Wrapper } from "./Search.styles";

import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { setCurrentPage } from "../../store/reducers/announcement/announcementSlice";
import { useAppDispatch } from "../../hooks/redux";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("searchQuery") || ""
  );
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const param = searchParams.get("searchQuery");
    if (param) {
      searchParams.delete("searchQuery");
      setSearchParams(searchParams);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchQuery) {
      setSearchParams({ ...searchParams, searchQuery });
    } else {
      searchParams.delete("searchQuery");
      setSearchParams(searchParams);
    }
    dispatch(setCurrentPage(1));
  };

  const onClick = (e: any) => {
    if (location.pathname === "/" && !searchQuery) {
      navigate("/announcements");
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          name='search'
          fullWidth
          placeholder='Search for anything...'
          onChange={handleChange}
          value={searchQuery}
        />
        <button onClick={onClick}>
          <span>Search</span> <BsSearch />
        </button>
      </form>
    </Wrapper>
  );
};

export default Search;
