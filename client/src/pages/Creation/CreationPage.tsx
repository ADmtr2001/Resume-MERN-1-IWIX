import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";

import { Wrapper } from "./CreationPage.styles";

const CreationPage = () => {
  return (
    <Wrapper>
      <form>
        <label>
          Title
          <Input fullWidth />
        </label>
        <label>
          Category
          <Select options={["Transport", "Food", "Sport"]} fullWidth />
        </label>
        <label>
          Price
          <Input fullWidth />
        </label>
        <label>
          Image
          <Input fullWidth type='file' />
        </label>
        <label>
          Description
          <textarea rows={5} />
        </label>
        <label>
          Location
          <Input fullWidth />
        </label>
        <label>
          Email
          <Input fullWidth type='email' />
        </label>
        <label>
          Phone Number
          <Input fullWidth />
        </label>
        <Button>Create</Button>
      </form>
    </Wrapper>
  );
};

export default CreationPage;
