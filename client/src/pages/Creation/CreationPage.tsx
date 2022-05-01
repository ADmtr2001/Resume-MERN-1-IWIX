import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";

import { Wrapper } from "./CreationPage.styles";

const CreationPage = () => {
  return (
    <Wrapper>
      <form>
        <Input
          name='title'
          label='Title'
          fullWidth
          value=''
          onChange={() => {}}
        />
        Category
        <Select
          name='category'
          label='Category'
          options={[{ label: "Value", value: "value" }]}
          fullWidth
          value=''
          onChange={() => {}}
        />
        <Input
          name='price'
          label='Price'
          fullWidth
          value=''
          onChange={() => {}}
        />
        <Input
          name='image'
          label='Image'
          fullWidth
          type='file'
          value=''
          onChange={() => {}}
        />
        Description
        <textarea rows={5} />
        <Input
          name='location'
          label='Location'
          fullWidth
          value=''
          onChange={() => {}}
        />
        <Input
          name='email'
          label='Email'
          fullWidth
          type='email'
          value=''
          onChange={() => {}}
        />
        <Input
          name='phoneNumber'
          label='Phone Number'
          fullWidth
          value=''
          onChange={() => {}}
        />
        <Button>Create</Button>
      </form>
    </Wrapper>
  );
};

export default CreationPage;
