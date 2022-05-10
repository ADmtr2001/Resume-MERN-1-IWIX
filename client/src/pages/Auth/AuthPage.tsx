import React, { useEffect, useState } from "react";

import Button from "../../components/UI/Button/Button";
import FormInput from "../../components/UI/Input/FormInput";
import Loader from "../../components/UI/Loader/Loader";

import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  asyncLogin,
  asyncRegister,
} from "../../store/reducers/user/userActionCreators";
import { scrollToTop } from "../../utils";

import { Wrapper } from "./AuthPage.styles";

import { IAuthFormData } from "../../types";

const AuthPage = () => {
  const [isSignupForm, setIsSignupForm] = useState(false);

  const { isLogin, isSignup, loginError, signupError } = useAppSelector(
    (state) => state.user
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    reset,
  } = useForm<IAuthFormData>({ mode: "onChange" });

  const dispatch = useAppDispatch();

  useEffect(() => {
    scrollToTop();
  }, []);

  const switchMode = () => {
    reset();
    setIsSignupForm((prev) => !prev);
  };

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    if (isSignupForm) {
      dispatch(asyncRegister(data));
    } else {
      dispatch(asyncLogin(data));
    }
  };

  return (
    <Wrapper>
      <h2>{isSignupForm ? "Signup" : "Login"}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {isSignupForm && (
          <FormInput<IAuthFormData>
            label="Name"
            name="name"
            register={register}
            options={{
              required: "Please provide name",
              minLength: { value: 2, message: "Name min length: 2" },
              maxLength: { value: 30, message: "Name max length: 30" },
            }}
            error={errors.name?.message}
            fullWidth
          />
        )}

        <FormInput<IAuthFormData>
          label="Email"
          type="email"
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

        <FormInput<IAuthFormData>
          label="Password"
          type="password"
          name="password"
          register={register}
          options={{
            required: "Please provide password",
            minLength: { value: 6, message: "Password min length: 6" },
            maxLength: { value: 20, message: "Password max length: 20" },
          }}
          error={errors.password?.message}
          fullWidth
        />

        {isSignupForm && (
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            register={register}
            options={{
              required: "Please confirm password",
              validate: (value) =>
                value === getValues("password") || "Password mismatch",
            }}
            error={errors.confirmPassword?.message}
            fullWidth
          />
        )}

        <div className="request-error">{loginError || signupError || null}</div>

        {isLogin || isSignup ? (
          <Loader />
        ) : (
          <Button disabled={!isValid}>
            {isSignupForm ? "Sign Up" : "Sign In"}
          </Button>
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
