import React, { useEffect, useMemo, useState } from "react";

import Button from "../../components/UI/Button/Button";
import FormInput from "../../components/UI/Input/FormInput";
import Loader from "../../components/UI/Loader/Loader";
import FormSelect from "../../components/UI/Select/FormSelect";
import FormTextArea from "../../components/UI/TextArea/FormTextArea";

import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { asyncGetCategories } from "../../store/reducers/category/categoryActionCreators";
import { scrollToTop } from "../../utils";
import {
  asyncCreateAnnouncement,
  asyncGetSingleAnnouncement,
  asyncUpdateAnnouncement,
} from "../../store/reducers/announcement/announcementActionCreators";
import {
  clearCurrentAnnouncement,
  clearUpdatedAndCreatedAnnouncement,
} from "../../store/reducers/announcement/announcementSlice";

import { Wrapper } from "./CreationPage.styles";

import { IOption, ICreationFormData } from "../../types";

const CreationPage = () => {
  const { id: announcementId } = useParams();
  const [defaultValues, setDefaultValues] = useState<{
    [index: string]: string;
  }>({});

  const { user } = useAppSelector((state) => state.user);
  const { categories, isCategoriesLoading } = useAppSelector(
    (state) => state.category
  );
  const {
    singleAnnouncement,
    isSingleAnnouncementLoading,
    updatedAnnouncement,
    createdAnnouncement,
    isAnnouncementCreating,
    isAnnouncementUpdating,
  } = useAppSelector((state) => state.announcement);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreationFormData>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues,
  });

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();

    if (categories.length === 0) {
      dispatch(asyncGetCategories());
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
    if (singleAnnouncement) {
      setDefaultValues({
        title: singleAnnouncement.title,
        category: singleAnnouncement.category,
        price: singleAnnouncement.price.toString(),
        description: singleAnnouncement.description,
        location: singleAnnouncement.location,
        email: singleAnnouncement.email,
        phoneNumber: singleAnnouncement.phoneNumber,
      });
      reset(defaultValues);
    }
  }, [singleAnnouncement]);

  useEffect(() => {
    if (updatedAnnouncement) {
      navigate(`/announcement/${updatedAnnouncement._id}`);
    }
    if (createdAnnouncement) {
      navigate(`/announcement/${createdAnnouncement._id}`);
    }
  }, [updatedAnnouncement, createdAnnouncement]);

  let selectOptions: IOption[] = useMemo(() => {
    const options = categories.map((category) => {
      return { label: category.name, value: category._id };
    });
    return [{ label: "Any", value: "62782d01909cc2389eb9e4c5" }, ...options];
  }, [categories]);

  if (isCategoriesLoading || isSingleAnnouncementLoading) {
    return <Loader />;
  }

  if (!user?.isActivated) {
    return (
      <Wrapper>
        <p className="activation-message">
          Check your email to activate your account!
        </p>
      </Wrapper>
    );
  }

  const onSubmit: SubmitHandler<ICreationFormData> = (data) => {
    const announcementData = new FormData();
    announcementData.append("title", data.title);
    announcementData.append("category", data.category);
    announcementData.append("price", data.price);
    announcementData.append("description", data.description);
    announcementData.append("location", data.location);
    announcementData.append("email", data.email);
    announcementData.append("phoneNumber", data.phoneNumber);
    if (data.image) {
      // @ts-ignore
      announcementData.append("image", data.image[0]);
    }

    if (announcementId) {
      dispatch(
        asyncUpdateAnnouncement({ data: announcementData, id: announcementId })
      );
    } else {
      dispatch(asyncCreateAnnouncement(announcementData));
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput<ICreationFormData>
          label="Title"
          name="title"
          register={register}
          options={{
            required: "Please provide title",
            minLength: { value: 3, message: "Min length: 3" },
            maxLength: { value: 50, message: "Max length: 50" },
          }}
          error={errors.title?.message}
          fullWidth
        />

        <FormSelect<ICreationFormData>
          label="Category"
          name="category"
          options={selectOptions}
          register={register}
          fullWidth
        />

        <FormInput<ICreationFormData>
          label="Price"
          name="price"
          type="number"
          register={register}
          options={{
            required: "Please provide price",
            min: { value: 1, message: "Min: 1" },
            max: { value: 999_999, message: "Max: 999 999" },
          }}
          error={errors.price?.message}
          fullWidth
        />

        <FormInput<ICreationFormData>
          type="file"
          label="Image"
          name="image"
          register={register}
          options={
            location.pathname.startsWith("/update")
              ? {}
              : { required: "Please provide image" }
          }
          // @ts-ignore
          error={errors.image?.message}
          fullWidth
        />

        <FormTextArea<ICreationFormData>
          label="Description"
          name="description"
          register={register}
          options={{
            required: "Please provide description",
            maxLength: { value: 600, message: "Max length: 600" },
          }}
          error={errors.description?.message}
          rows={5}
        />

        <FormInput<ICreationFormData>
          label="Location"
          name="location"
          register={register}
          options={{
            required: "Please provide location",
            minLength: { value: 2, message: "Min length: 2" },
            maxLength: { value: 60, message: "Max length: 60" },
          }}
          error={errors.location?.message}
          fullWidth
        />

        <FormInput<ICreationFormData>
          label="Email"
          name="email"
          register={register}
          options={{
            required: "Please provide email",
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please provide a valid email",
            },
          }}
          error={errors.email?.message}
          fullWidth
        />

        <FormInput<ICreationFormData>
          label="Phone Number"
          name="phoneNumber"
          register={register}
          options={{
            required: "Please provide phone number",
            minLength: { value: 10, message: "Min length: 10" },
            maxLength: { value: 13, message: "Max length: 13" },
          }}
          error={errors.phoneNumber?.message}
          fullWidth
        />

        {isAnnouncementCreating || isAnnouncementUpdating ? (
          <Loader />
        ) : (
          <Button>{announcementId ? "Update" : "Create"}</Button>
        )}
      </form>
    </Wrapper>
  );
};

export default CreationPage;
