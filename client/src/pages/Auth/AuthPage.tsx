import React, { useState } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

import { Wrapper } from "./AuthPage.styles";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthPage = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);

  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignup) {
    } else {
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        {isSignup && <Input name='name' label='Name' fullWidth />}
        <Input name='email' type='email' label='Email' fullWidth />
        <Input name='password' type='password' label='Password' fullWidth />
        {isSignup && (
          <Input
            name='confirmPassword'
            type='password'
            label='Confirm Passowrd'
            fullWidth
          />
        )}
        <Button>{isSignup ? "Sign Up" : "Sign In"}</Button>
      </form>
      <button onClick={switchMode}>
        {isSignup
          ? "Already have an account? Sign in"
          : "Don't have an account? Sign Up"}
      </button>
    </Wrapper>
  );
};

export default AuthPage;
