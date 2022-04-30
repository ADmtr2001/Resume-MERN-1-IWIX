import React from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

import { Wrapper } from "./AuthPage.styles";

const AuthPage = () => {
  return (
    <Wrapper>
      <form>
        <label>
          Name
          <Input fullWidth />
        </label>
        <label>
          Email
          <Input fullWidth />
        </label>
        <label>
          Password
          <Input fullWidth />
        </label>
        <label>
          Confirm Passowrd
          <Input fullWidth />
        </label>
        <Button>Login</Button>
      </form>
      <button>Already have an account? Sign in</button>
    </Wrapper>
  );
};

export default AuthPage;
