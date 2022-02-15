// import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Button from "../../components/Button/Button";
// import authService from "../../services/auth.service";
// import "./Signup.css";

// const SignupSchema = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().email().required(),
//   password: yup.string().required().min(5),
//   confirmPassword: yup
//     .string()
//     .required("You must confirm password")
//     .oneOf([yup.ref("password"), null], "Passwords must match"),
// });

// const Signup = () => {
//   const [signupSuccess, setSignupSuccess] = useState();
//   const [signupError, setSignupError] = useState();
//   const [isLoading, setIsLoading] = useState(false);
//   const [redirectOnLogin, setRedirectOnLogin] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(SignupSchema) });

//   const onSubmit = async ({ name, email, password }) => {
//     const credentials = {
//       name,
//       email,
//       password,
//     };
//     try {
//       setIsLoading(true);
//       const response = await authService.signup(credentials);
//       setSignupSuccess(response);
//       setSignupError("");
//       setIsLoading(false);
//       setTimeout(() => {
//         setRedirectOnLogin(true);
//       }, 700);
//     } catch (error) {
//       setIsLoading(false);
//       setSignupError(error.response.data.message);
//       setSignupSuccess("");
//     }
//   };

//   return (
//     <>
//       {redirectOnLogin && <Redirect to="/login" />}
//       <div className="form-container">
//         <h2 className="form-header">Sign Up</h2>
//         <p className="login-redirect-info">
//           Already have an account? <Link to={"/login"}>Log in now</Link>
//         </p>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <Form.Group className="mb-3" controlId="formName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter name"
//               {...register("name")}
//             />
//             {errors.name && (
//               <p className="form-error-message">{errors.name.message}</p>
//             )}
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               {...register("email")}
//             />
//             {errors.email && (
//               <p className="form-error-message">{errors.email.message}</p>
//             )}
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               {...register("password")}
//             />
//             {errors.password && (
//               <p className="form-error-message">{errors.password.message}</p>
//             )}
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formConfirmPassword">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Confirm password"
//               {...register("confirmPassword")}
//             />
//             {errors.confirmPassword && (
//               <p className="form-error-message">
//                 {errors.confirmPassword.message}
//               </p>
//             )}
//           </Form.Group>
//           <Button label="Sign Up" isLoading={isLoading} />
//         </Form>
//       </div>
//     </>
//   );
// };

// export default Signup;

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
