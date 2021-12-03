import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignupSchema) });

  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));

  return (
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
        <Button label="Sign Up" />
      </Form>
    </div>
  );
};

export default Signup;
