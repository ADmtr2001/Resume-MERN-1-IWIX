import React, { useEffect, useState } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Loader from "../../components/UI/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  asyncLogin,
  asyncRegister,
} from "../../store/reducers/user/userActionCreators";
import { IAuthFormData } from "../../types";
import { scrollToTop } from "../../utils";

import { Wrapper } from "./AuthPage.styles";

const initialState: IAuthFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthPage = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignupForm, setIsSignupForm] = useState(false);
  const dispatch = useAppDispatch();
  const { isLogin, isSignup } = useAppSelector((state) => state.user);

  const switchMode = () => {
    setFormData(initialState);
    setIsSignupForm((prev) => !prev);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignupForm) {
      dispatch(asyncRegister(formData));
    } else {
      dispatch(asyncLogin(formData));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        {isSignupForm && (
          <Input
            name='name'
            label='Name'
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
        )}
        <Input
          name='email'
          type='email'
          label='Email'
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          name='password'
          type='password'
          label='Password'
          fullWidth
          value={formData.password}
          onChange={handleChange}
        />
        {isSignupForm && (
          <Input
            name='confirmPassword'
            type='password'
            label='Confirm Passowrd'
            fullWidth
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        )}
        {isLogin || isSignup ? (
          <Loader />
        ) : (
          <Button>{isSignupForm ? "Sign Up" : "Sign In"}</Button>
        )}
      </form>
      <button onClick={switchMode}>
        {isSignupForm
          ? "Already have an account? Sign in"
          : "Don't have an account? Sign Up"}
      </button>
    </Wrapper>
  );
};

export default AuthPage;
