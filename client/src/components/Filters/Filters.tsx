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
  const { categories } = useAppSelector((state) => state.category);
  const { currentPage } = useAppSelector((state) => state.announcement);

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      dispatch(setCurrentPage(+page));
    } else {
      dispatch(setCurrentPage(1));
    }
  }, []);

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
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
    setSearchParams(params);
  }, [formData, setSearchParams, searchParams, currentPage]);

  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(asyncFetchAnnouncements(location.search)),
      400
    );
    return () => clearTimeout(timer);
  }, [searchParams, dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeWithPageReset = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    dispatch(setCurrentPage(1));
  };

  return (
    <Wrapper>
      <div className='category'>
        <CategorySelect
          categories={categories}
          onChange={handleChangeWithPageReset}
          value={formData.category}
        />
      </div>
      <div className='price'>
        <p>Price</p>
        <Input
          name='from'
          placeholder='From'
          value={formData.from}
          onChange={handleChangeWithPageReset}
        />
        <Input
          name='to'
          placeholder='To'
          value={formData.to}
          onChange={handleChangeWithPageReset}
        />
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
        />
      </div>
      <div className='display'>
        <p>Display</p>
        <div className='buttons'>
          <Button isActive>
            <IoGridSharp />
          </Button>
          <Button>
            <AiOutlineBars />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filters;
