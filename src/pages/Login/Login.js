import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Login.css";

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = (data) => console.log(data);

  return (
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

        <Button label="Log In" />
      </Form>
    </div>
  );
};

export default Login;
