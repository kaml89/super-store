import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import authService from "../../services/auth.service";
import "./Signup.css";

const SignupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email address is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must contain at least 5 characters"),
  confirmPassword: yup
    .string()
    .required("You must confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  // const [signupSuccess, setSignupSuccess] = useState();
  // const [signupError, setSignupError] = useState();
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
      await authService.signup(credentials);
      // setSignupSuccess(response);
      // setSignupError("");
      setIsLoading(false);
      setTimeout(() => {
        setRedirectOnLogin(true);
      }, 700);
    } catch (error) {
      setIsLoading(false);
      // setSignupError(error.response.data.message);
      // setSignupSuccess("");
    }
  };

  return (
    <>
      {redirectOnLogin && <Redirect to="/login" />}
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" color="textPrimary">
            Login
          </Typography>
          <Typography variant="body" color="textSecondary">
            Already have an account? <Link to={"/login"}>Log In</Link>
          </Typography>
          <Box>
            <Typography></Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column", my: 3 }}>
              <TextField
                label="Name"
                variant="outlined"
                margin="normal"
                helperText={errors.name && errors.name.message}
                error={Boolean(errors.name)}
                {...register("name")}
              />
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                helperText={errors.email && errors.email.message}
                error={Boolean(errors.email)}
                {...register("email")}
              />
              <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                helperText={errors.password && errors.password.message}
                error={Boolean(errors.password)}
                {...register("password")}
              />
              <TextField
                label="Confirm password"
                variant="outlined"
                margin="normal"
                type="password"
                helperText={
                  errors.confirmPassword && errors.confirmPassword.message
                }
                error={Boolean(errors.confirmPassword)}
                {...register("confirmPassword")}
              />
              <Box sx={{ py: 2 }}>
                <LoadingButton
                  fullWidth
                  size="large"
                  loading={isLoading}
                  variant="contained"
                  type="submit"
                >
                  Sign Up
                </LoadingButton>
              </Box>
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Signup;
