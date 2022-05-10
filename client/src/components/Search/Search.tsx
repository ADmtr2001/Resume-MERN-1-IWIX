import React, { useEffect, useState } from "react";
import Input from "../UI/Input/Input";

import { useAppDispatch } from "../../hooks/redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { setCurrentPage } from "../../store/reducers/announcement/announcementSlice";

import { Wrapper } from "./Search.styles";
import { BsSearch } from "../../common/icons";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("searchQuery") || ""
  );

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const param = searchParams.get("searchQuery");
    if (param) {
      searchParams.delete("searchQuery");
      setSearchParams(searchParams, { replace: true });
    }
  }, []);

  useEffect(() => {
    const param = searchParams.get("searchQuery");
    if (param) {
      setSearchQuery(param);
    } else {
      setSearchQuery("");
    }
  }, [searchParams]);

  const onClick = (e: any) => {
    if (
      (location.pathname === "/" ||
        location.pathname.startsWith("/announcement")) &&
      !searchQuery
    ) {
      navigate("/announcements");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchQuery) {
      setSearchParams({ ...searchParams, searchQuery }, { replace: true });
    } else {
      searchParams.delete("searchQuery");
      setSearchParams(searchParams, { replace: true });
    }

    dispatch(setCurrentPage(1));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          name="search"
          fullWidth
          placeholder="Search for anything..."
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
