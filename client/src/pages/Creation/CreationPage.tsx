import React, { useState } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";
import { useAppDispatch } from "../../hooks/redux";
import { createAsyncAnnouncement } from "../../store/reducers/announcement/announcementActionCreators";
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

const categories = [
  { label: "Transport", value: "626342f5451af261488363eb" },
  { label: "Food", value: "626342f5451af261488363ec" },
  { label: "Sport", value: "626342f5451af261488363ex" },
];

const CreationPage = () => {
  const [formData, setFormData] = useState({
    ...initialState,
    category: categories[0].value,
  });
  const dispatch = useAppDispatch();

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

    dispatch(createAsyncAnnouncement(announcementData));
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
          options={categories}
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
