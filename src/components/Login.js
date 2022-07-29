import React, { useEffect } from "react";
import styled from "styled-components";
import CustomInput from "./Input";
import CheckboxContainer from "./Checkbox/CheckboxContainer";
import CheckboxLabel from "./Checkbox/CheckboxLabel";
import Checkbox from "./Checkbox/Checkbox";
import CustomLink from "./CustomLink";
import Button from "./Button";
import { useAuthContext } from "../context/AuthContext";

const Div = styled.div`
  background-color: ${(props) => props.theme.bg1};
  padding: 20px;
  border-radius: 10px;
  height: 400px;
  width: 410px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

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

const Login = () => {
  const {
    updateUpdatePage,
    email,
    password,
    isRemember,
    handleLogin,
    handleIsRemember,
  } = useAuthContext();

  useEffect(() => {
    const callback = (e) => {
      if (e.key === "Enter") {
        handleLogin(e);
      }
    };

    document.addEventListener("keypress", callback);

    return () => {
      document.removeEventListener("keypress", callback);
    };
  }, []);

  return (
    <Div>
      <h1>Login</h1>
      <p>Login to your account to see your projects</p>
      <form onSubmit={handleLogin}>
        <CustomInput
          onchange={updateUpdatePage}
          value={email}
          placeholder="Email"
          name="email"
          type="email"
        />
        <CustomInput
          onchange={updateUpdatePage}
          value={password}
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
              value={isRemember}
              onchange={handleIsRemember}
            />
          </CheckboxContainer>
          <CustomLink to="/reset-password">Forgot your password?</CustomLink>
        </LinkDiv>
        <Button full type="submit">
          Login
        </Button>
      </form>
      <p>
        Don't have an account yet?{" "}
        <CustomLink to="/register">Join Colby.io</CustomLink>
      </p>
    </Div>
  );
};

export default Login;
