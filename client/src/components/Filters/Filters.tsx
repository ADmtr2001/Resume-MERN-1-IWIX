import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

import { Wrapper } from "./Filters.styles";

import { IoGridSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { asyncFetchAnnouncements } from "../../store/reducers/announcement/announcementActionCreators";
import CategorySelect from "../Categories/CategorySelect/CategorySelect";
import { setCurrentPage } from "../../store/reducers/announcement/announcementSlice";
import UserInfo from "../UserInfo/UserInfo";
import { MdDelete } from "react-icons/md";
import { asyncGetSingleUser } from "../../store/reducers/user/userActionCreators";
import ActionButtons from "./DisplayButtons/ActionButtons";
import Loader from "../UI/Loader/Loader";

const initialState = {
  category: "",
  from: "",
  to: "",
  sort: "",
};

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    category: searchParams.get("category") || "",
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    sort: searchParams.get("sort") || "",
  });
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { categories, isCategoriesLoading } = useAppSelector(
    (state) => state.category
  );
  const { currentPage } = useAppSelector((state) => state.announcement);
  const { user, currentUser, isUserLoading, isCurrentUserLoading } =
    useAppSelector((state) => state.user);

  useEffect(() => {
    const page = searchParams.get("page");
    const creator = searchParams.get("creator");
    if (page) {
      dispatch(setCurrentPage(+page));
    } else {
      dispatch(setCurrentPage(1));
    }

    if (creator) {
      dispatch(asyncGetSingleUser(creator));
    }
  }, []);

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const creator = searchParams.get("creator");
    const params: { [index: string]: string } = {};
    for (const [key, value] of Object.entries(formData)) {
      if (value !== "") {
        params[key] = value;
      }
    }
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
      () => dispatch(asyncFetchAnnouncements(location.search)),
      400
    );
    return () => clearTimeout(timer);
  }, [searchParams, dispatch]);

  const deleleCreatorFromSearch = () => {
    searchParams.delete("creator");
    setSearchParams(searchParams, { replace: true });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    dispatch(setCurrentPage(1));
  };

  const reset = () => {
    setFormData(initialState);
    setSearchParams({});
    dispatch(setCurrentPage(1));
  };

  if (isCategoriesLoading || isUserLoading || isCurrentUserLoading)
    return <Loader />;

  return (
    <Wrapper>
      <div className='category'>
        <CategorySelect
          categories={categories}
          onChange={handleChange}
          value={formData.category}
        />
      </div>
      <div className='price'>
        <p>Price</p>
        <div>
          <Input
            name='from'
            placeholder='From'
            value={formData.from}
            onChange={handleChange}
          />
          <Input
            name='to'
            placeholder='To'
            value={formData.to}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='sort'>
        <p>Sort</p>
        <Select
          name='sort'
          options={[
            { label: "Best Match", value: "" },
            { label: "Price: lowest first", value: "asc" },
            { label: "Price: highest first", value: "des" },
            { label: "Time: new first", value: "new" },
            { label: "Time: old first", value: "old" },
          ]}
          value={formData.sort}
          onChange={handleChange}
          fullWidth
        />
      </div>
      {location.pathname !== "/user" &&
        searchParams.get("creator") &&
        currentUser && (
          <div className='user'>
            <UserInfo user={currentUser} short />
            <Button onClick={deleleCreatorFromSearch}>
              <MdDelete />
            </Button>
          </div>
        )}
      <div className='action-buttons'>
        <ActionButtons reset={reset} />
      </div>
    </Wrapper>
  );
};

export default Filters;
