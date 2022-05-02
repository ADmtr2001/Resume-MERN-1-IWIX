import React, { useEffect, useMemo, useState } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Loader from "../../components/UI/Loader/Loader";
import Select from "../../components/UI/Select/Select";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { asyncCreateAnnouncement } from "../../store/reducers/announcement/announcementActionCreators";
import { asyncFetchCategories } from "../../store/reducers/category/categoryActionCreators";
import { IOption } from "../../types";
import { ICreationFormData } from "../../types/IFormData";

import { Wrapper } from "./CreationPage.styles";

const initialState: ICreationFormData = {
  title: "",
  category: "",
  price: "",
  image: null,
  description: "",
  location: "",
  email: "",
  phoneNumber: "",
};

const CreationPage = () => {
  const [formData, setFormData] = useState({
    ...initialState,
  });
  const { categories, isCategoriesLoading } = useAppSelector(
    (state) => state.category
  );
  const dispatch = useAppDispatch();

  let selectOptions: IOption[] = useMemo(
    () =>
      categories.map((category) => {
        return { label: category.name, value: category._id };
      }),
    [categories]
  );

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(asyncFetchCategories());
    }
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      category: selectOptions[0].value,
    }));
  }, [selectOptions]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.image) return;

    const announcementData = new FormData();
    announcementData.append("title", formData.title);
    announcementData.append("category", formData.category);
    announcementData.append("price", formData.price);
    announcementData.append("description", formData.description);
    announcementData.append("location", formData.location);
    announcementData.append("email", formData.email);
    announcementData.append("phoneNumber", formData.phoneNumber);
    announcementData.append("image", formData.image);

    dispatch(asyncCreateAnnouncement(announcementData));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    // @ts-ignore
    setFormData((prev) => ({ ...prev, image: e.target!.files[0]! }));
  };

  if (isCategoriesLoading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          name='title'
          label='Title'
          fullWidth
          value={formData.title}
          onChange={handleInputChange}
        />
        <Select
          name='category'
          label='Category'
          options={selectOptions}
          fullWidth
          value={formData.category}
          onChange={handleInputChange}
        />
        <Input
          name='price'
          label='Price'
          fullWidth
          value={formData.price}
          onChange={handleInputChange}
        />
        <Input
          name='image'
          label='Image'
          fullWidth
          type='file'
          onChange={handleImageChange}
        />
        <label>
          Description
          <textarea
            rows={5}
            name='description'
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <Input
          name='location'
          label='Location'
          fullWidth
          value={formData.location}
          onChange={handleInputChange}
        />
        <Input
          name='email'
          label='Email'
          fullWidth
          type='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          name='phoneNumber'
          label='Phone Number'
          fullWidth
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <Button>Create</Button>
      </form>
    </Wrapper>
  );
};

export default CreationPage;
