import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "./Input";
import CheckboxContainer from "./Checkbox/CheckboxContainer";
import CheckboxLabel from "./Checkbox/CheckboxLabel";
import Checkbox from "./Checkbox/Checkbox";
import CustomLink from "./CustomLink";
import Button from "./Button";
import Card from "./Card";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: { value: "", danger: false },
  password: { value: "", danger: false },
  isRemembered: false,
};

const Login = () => {
  const [state, setState] = useState(initialState);
  const { isLoading, user, loginUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email.value === "" || state.password.value === "") {
      const email =
        state.email.value === "" ? { value: "", danger: true } : state.email;
      const password =
        state.password.value === ""
          ? { value: "", danger: true }
          : state.password;

      const newState = { ...state, email, password };
      toast.error("Please fill out all empty fields");
      setState(newState);
      return;
    }
    loginUser({ email: state.email.value, password: state.password.value });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newState = { ...state, [name]: { value, danger: false } };
    setState(newState);
  };

  const handleRemember = (e) => {};

  useEffect(() => {
    const callback = (e) => {
      if (e.key === "Enter") {
      }
    };
    document.addEventListener("keypress", callback);
    return () => {
      document.removeEventListener("keypress", callback);
    };
  }, []);

  return (
    <Card width="450px" height="405px">
      <Div>
        <h1>Login</h1>
        <p>Login to your account to see your projects</p>
        <form onSubmit={handleSubmit}>
          <CustomInput
            onchange={handleInput}
            value={state.email}
            placeholder="Email"
            name="email"
            type="email"
          />
          <CustomInput
            onchange={handleInput}
            value={state.password}
            placeholder="Password"
            password
            name="password"
          />
          <LinkDiv>
            <CheckboxContainer>
              <CheckboxLabel id="remember-me">Remember me</CheckboxLabel>
              <Checkbox
                label="Remember me"
                id="remember-me"
                value={state.isRemembered}
                onchange={handleRemember}
              />
            </CheckboxContainer>
            <CustomLink to="/reset-password">Forgot your password?</CustomLink>
          </LinkDiv>
          <Button full loading={isLoading} type="submit">
            Login
          </Button>
        </form>
        <p>
          Don't have an account yet?{" "}
          <CustomLink to="/register">Join Colby.io</CustomLink>
        </p>
      </Div>
    </Card>
  );
};

const Div = styled.div`
  h1 {
    font-size: 32px;
    text-align: center;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    font-size: 13px;
    color: ${(props) => props.theme.textColorLight};
    margin-bottom: 20px;
  }

  p {
    margin-top: 30px;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center !important;
  justify-content: space-between;
  font-size: 14px;
  margin: 10px 0 20px;
`;

export default Login;
