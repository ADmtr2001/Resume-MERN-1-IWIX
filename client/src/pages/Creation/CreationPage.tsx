import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";

import { Wrapper } from "./CreationPage.styles";

const CreationPage = () => {
  return (
    <Wrapper>
      <form>
        <Input name='title' label='Title' fullWidth />
        Category
        <Select
          name='category'
          label='Category'
          options={["Transport", "Food", "Sport"]}
          fullWidth
        />
        <Input name='price' label='Price' fullWidth />
        <Input name='image' label='Image' fullWidth type='file' />
        Description
        <textarea rows={5} />
        <Input name='location' label='Location' fullWidth />
        <Input name='email' label='Email' fullWidth type='email' />
        <Input name='phoneNumber' label='Phone Number' fullWidth />
        <Button>Create</Button>
      </form>
    </Wrapper>
  );
};

export default CreationPage;
