import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

import { Wrapper } from "./CreationPage.styles";

const CreationPage = () => {
  return (
    <Wrapper>
      <form>
        <Input fullWidth />
        <Input fullWidth />
        <Input fullWidth />
        <textarea rows={5} />
        <Input fullWidth />
        <Input fullWidth />
        <Input fullWidth />
        <Button>Create</Button>
      </form>
    </Wrapper>
  );
};

export default CreationPage;
