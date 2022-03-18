import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import { useAuth } from "../../context/AuthContext";
import authService from "../../services/auth.service";

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = () => console.log("submit");
  return (
    <Paper elevation={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoadingButton
          onClick={handleSubmit(onSubmit)}
          loading={isLoading}
          variant="contained"
        >
          Log In
        </LoadingButton>
      </form>
    </Paper>
  );
};

export default LoginForm;
