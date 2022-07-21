import React, { useState } from "react";
import styled from "styled-components";
import CustomInput from "./Input";

const Div = styled.div`
  background-color: ${(props) => props.theme.bg1};
  padding: 20px;
  border-radius: 20px;
  height: 440px;
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
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Div>
      <h1>Login</h1>
      <p>Login to your account to see your projects</p>
      <form>
        <CustomInput onchange={setEmail} value={email} placeholder="Email" />
        <CustomInput
          onchange={setPassword}
          value={password}
          placeholder="Password"
        />
      </form>
    </Div>
  );
};

export default Login;
