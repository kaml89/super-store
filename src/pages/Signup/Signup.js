import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import authService from "../../services/auth.service";
import "./Signup.css";

const SignupSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
  confirmPassword: yup
    .string()
    .required("You must confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const [signupSuccess, setSignupSuccess] = useState();
  const [signupError, setSignupError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignupSchema) });

  const onSubmit = async ({ name, email, password }) => {
    const credentials = {
      name,
      email,
      password,
    };
    try {
      setIsLoading(true);
      const response = await authService.signup(credentials);
      setSignupSuccess(response);
      setSignupError("");
      setIsLoading(false);
      setTimeout(() => {
        setRedirectOnLogin(true);
      }, 700);
    } catch (error) {
      setIsLoading(false);
      setSignupError(error.response.data.message);
      setSignupSuccess("");
    }
  };

  return (
    <>
      {redirectOnLogin && <Redirect to="/login" />}
      <div className="form-container">
        <h2 className="form-header">Sign Up</h2>
        <p className="login-redirect-info">
          Already have an account? <Link to={"/login"}>Log in now</Link>
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              {...register("name")}
            />
            {errors.name && (
              <p className="form-error-message">{errors.name.message}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email")}
            />
            {errors.email && (
              <p className="form-error-message">{errors.email.message}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="form-error-message">{errors.password.message}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="form-error-message">
                {errors.confirmPassword.message}
              </p>
            )}
          </Form.Group>
          <Button label="Sign Up" isLoading={isLoading} />
        </Form>
      </div>
    </>
  );
};

export default Signup;
