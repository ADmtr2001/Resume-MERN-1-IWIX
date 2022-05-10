import React, { useEffect, useState } from "react";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import CategorySelect from "../Categories/CategorySelect/CategorySelect";
import Loader from "../UI/Loader/Loader";
import ActionButtons from "./ActionButtons/ActionButtons";
import UserInfo from "../UserInfo/UserInfo";

import { useLocation, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { asyncGetAnnouncements } from "../../store/reducers/announcement/announcementActionCreators";
import { setCurrentPage } from "../../store/reducers/announcement/announcementSlice";
import { asyncGetSingleUser } from "../../store/reducers/user/userActionCreators";

import { Wrapper } from "./Filters.styles";
import { MdDelete } from "../../common/icons";

const initialState = {
  category: "",
  from: "",
  to: "",
  sort: "",
};

const sortOptions = [
  { label: "Best Match", value: "" },
  { label: "Price: lowest first", value: "asc" },
  { label: "Price: highest first", value: "des" },
  { label: "Time: new first", value: "new" },
  { label: "Time: old first", value: "old" },
];

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    category: searchParams.get("category") || "",
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    sort: searchParams.get("sort") || "",
  });

  const { categories, isCategoriesLoading } = useAppSelector(
    (state) => state.category
  );
  const { currentPage } = useAppSelector((state) => state.announcement);
  const { user, singleUser, isUserLoading, isSingleUserLoading } =
    useAppSelector((state) => state.user);

  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const page = searchParams.get("page");
    const creator = searchParams.get("creator");

    dispatch(setCurrentPage(page ? +page : 1));

    if (creator) {
      dispatch(asyncGetSingleUser(creator));
    }
  }, []);

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const creator = searchParams.get("creator");

    // Remove empty query params from url
    const params: { [index: string]: string } = {};
    for (const [key, value] of Object.entries(formData)) {
      if (value !== "") {
        params[key] = value;
      }
    }

    // Add existing query params
    if (searchQuery) {
      params.searchQuery = searchQuery;
    }
    if (currentPage) {
      params.page = currentPage.toString();
    }
    if (creator) {
      params.creator = creator;
    }
    if (location.pathname === "/user" && user) {
      params.creator = user._id;
    }

    setSearchParams(params, { replace: true });
  }, [formData, setSearchParams, searchParams, currentPage, user]);

  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(asyncGetAnnouncements(location.search)),
      400
    );
    return () => clearTimeout(timer);
  }, [searchParams, dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    dispatch(setCurrentPage(1));
  };

  const deleteCreatorFromSearch = () => {
    searchParams.delete("creator");
    setSearchParams(searchParams, { replace: true });
  };

  const reset = () => {
    setFormData(initialState);
    setSearchParams({});
    dispatch(setCurrentPage(1));
  };

  if (isCategoriesLoading || isUserLoading || isSingleUserLoading)
    return <Loader />;

  const isUserFilterVisible =
    location.pathname !== "/user" && searchParams.get("creator") && singleUser;

  return (
    <Wrapper>
      <div className="category">
        <CategorySelect
          categories={categories}
          onChange={handleChange}
          value={formData.category}
        />
      </div>
      <div className="filter-price">
        <p>Price</p>
        <div>
          <Input
            name="from"
            placeholder="From"
            value={formData.from}
            onChange={handleChange}
          />
          <Input
            name="to"
            placeholder="To"
            value={formData.to}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="filter-sort">
        <p>Sort</p>
        <Select
          name="sort"
          options={sortOptions}
          value={formData.sort}
          onChange={handleChange}
          fullWidth
        />
      </div>
      {isUserFilterVisible && (
        <div className="filter-user">
          <UserInfo user={singleUser} short />
          <Button onClick={deleteCreatorFromSearch}>
            <MdDelete />
          </Button>
        </div>
      )}
      <div className="action-buttons">
        <ActionButtons reset={reset} />
      </div>
    </Wrapper>
  );
};

export default Filters;
