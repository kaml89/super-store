import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../context/AuthContext";
import authService from "../../services/auth.service";
import { useSnackbar } from "notistack";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const { setAuthState } = useAuth();
  // const [signupSuccess, setSignupSuccess] = useState();
  // const [signupError, setSignupError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
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
      enqueueSnackbar("You are succesfully logged in", { variant: "success" });

      setTimeout(() => {
        setRedirectOnLogin(true);
      }, 700);
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar("Invalid credentials", { variant: "error" });
      console.log(error);
    }
  };
  return (
    <>
      {redirectOnLogin && <Redirect to="/" />}
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" color="textPrimary">
            Login
          </Typography>
          <Typography variant="body" color="textSecondary">
            Don't have an account yet? <Link to={"/signup"}>Sign up</Link>
          </Typography>
          <Box>
            <Typography></Typography>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column", my: 3 }}>
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
              <Box sx={{ py: 2 }}>
                <LoadingButton
                  fullWidth
                  size="large"
                  loading={isLoading}
                  variant="contained"
                  type="submit"
                >
                  Log In
                </LoadingButton>
              </Box>
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
