import React from "react";
import { Form } from "react-bootstrap";
import Button from "../../components/Button/Button";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleClick = () => {};
  return (
    <div className="form-container">
      <h2 className="form-header">Sign Up</h2>
      <p className="login-redirect-info">
        Already have and account? <Link to={"/login"}>Log in now</Link>
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" />
        </Form.Group>
        <Button label="Sign Up" onClick={handleClick} />
      </Form>
    </div>
  );
};

export default Signup;
