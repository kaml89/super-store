import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import Button from "../../components/Button/Button";
import { useAuth } from "../../context/AuthContext";
import authService from "../../services/auth.service";
import "./Login.css";

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const { authState, setAuthState } = useAuth();
  const [signupSuccess, setSignupSuccess] = useState();
  const [signupError, setSignupError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = async ({ email, password }) => {
    const credentials = { email, password };
    try {
      setIsLoading(true);
      const data = await authService.login(credentials);
      setAuthState({
        token: data.token,
        userInfo: data.user,
      });
      setIsLoading(false);
      console.log(authState);
      setTimeout(() => {
        setRedirectOnLogin(true);
      }, 700);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      {redirectOnLogin && <Redirect to="/" />}
      <div className="form-container">
        <h2 className="form-header">Log In</h2>
        <p className="signup-redirect-info">
          Dont't have an account yet? <Link to={"/signup"}>Sign Up now</Link>
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
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

          {/* <Button label="Log In" isLoading={isLoading} /> */}
          <LoadingButton
            // onClick={onSubmit}
            loading={isLoading}
            variant="outlined"
          >
            Log In
          </LoadingButton>
        </Form>
      </div>
    </>
  );
};

export default Login;
