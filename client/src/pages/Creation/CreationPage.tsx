import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategorySelect from "../../components/Categories/CategorySelect/CategorySelect";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Loader from "../../components/UI/Loader/Loader";
import Select from "../../components/UI/Select/Select";
import TextArea from "../../components/UI/TextArea/TextArea";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  asyncCreateAnnouncement,
  asyncGetSingleAnnouncement,
  asyncUpdateAnnouncement,
} from "../../store/reducers/announcement/announcementActionCreators";
import {
  clearCurrentAnnouncement,
  clearUpdatedAndCreatedAnnouncement,
} from "../../store/reducers/announcement/announcementSlice";
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
  const { id: announcementId } = useParams();
  const [formData, setFormData] = useState({
    ...initialState,
  });
  const { categories, isCategoriesLoading } = useAppSelector(
    (state) => state.category
  );
  const dispatch = useAppDispatch();
  const {
    currentAnnouncement,
    isCurrentAnnouncementLoading,
    updatedAnnouncement,
    createdAnnouncement,
  } = useAppSelector((state) => state.announcement);
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(asyncFetchCategories());
    }
    if (announcementId) {
      dispatch(asyncGetSingleAnnouncement(announcementId));
    }
    return () => {
      dispatch(clearCurrentAnnouncement());
      dispatch(clearUpdatedAndCreatedAnnouncement());
    };
  }, []);

  useEffect(() => {
    if (currentAnnouncement) {
      setFormData({
        title: currentAnnouncement.title,
        category: currentAnnouncement.category,
        price: currentAnnouncement.price.toString(),
        description: currentAnnouncement.description,
        location: currentAnnouncement.location,
        email: currentAnnouncement.email,
        phoneNumber: currentAnnouncement.phoneNumber,
        image: null,
      });
    } else {
      setFormData(initialState);
    }
  }, [currentAnnouncement]);

  useEffect(() => {
    if (updatedAnnouncement) {
      navigate(`/announcement/${updatedAnnouncement._id}`);
    }
    if (createdAnnouncement) {
      navigate(`/announcement/${createdAnnouncement._id}`);
    }
  }, [updatedAnnouncement, createdAnnouncement]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const announcementData = new FormData();
    announcementData.append("title", formData.title);
    announcementData.append("category", formData.category);
    announcementData.append("price", formData.price);
    announcementData.append("description", formData.description);
    announcementData.append("location", formData.location);
    announcementData.append("email", formData.email);
    announcementData.append("phoneNumber", formData.phoneNumber);
    if (formData.image) {
      announcementData.append("image", formData.image);
    }

    if (announcementId) {
      dispatch(
        asyncUpdateAnnouncement({ data: announcementData, id: announcementId })
      );
    } else {
      dispatch(asyncCreateAnnouncement(announcementData));
    }
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
        <CategorySelect
          categories={categories}
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
        <TextArea
          label='Description'
          rows={5}
          name='description'
          value={formData.description}
          onChange={handleInputChange}
        />
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
        <Button>{announcementId ? "Update" : "Create"}</Button>
      </form>
    </Wrapper>
  );
};

export default CreationPage;
