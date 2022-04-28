import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

import { Wrapper } from "./AuthPage.styles";

const AuthPage = () => {
  return (
    <Wrapper>
      <form>
        <Input fullWidth />
        <Input fullWidth />
        <Input fullWidth />
        <Input fullWidth />
        <Button>Login</Button>
      </form>
      <button>Already have an account? Sign in</button>
    </Wrapper>
  );
};

export default AuthPage;
