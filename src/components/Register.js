import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "./Input";
import CustomLink from "./CustomLink";
import Button from "./Button";
import Card from "./Card";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  isLoading: false,
};

const Register = () => {
  const [state, setState] = useState(initialState);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newState = { ...state, [name]: { value, danger: false } };
    setState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = state.name.value;
    const lastname = state.lastname.value;
    const email = state.email.value;
    const password = state.password.value;
    e.preventDefault();
    if (!name || !lastname || !email || !password) {
      const newName = !name ? { value: "", danger: true } : state.name;
      const newLastname = !name ? { value: "", danger: true } : state.lastname;
      const newEmail = !email ? { value: "", danger: true } : state.email;
      const newPassword = !password
        ? { value: "", danger: true }
        : state.password;

      const newState = {
        ...state,
        email: newEmail,
        password: newPassword,
        name: newName,
        lastname: newLastname,
      };
      toast.error("Please fill out all empty fields");
      setState(newState);
    }
  };

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
    <Card width="450px">
      <Div>
        <h1>Sing up</h1>
        <form onSubmit={handleSubmit}>
          <CustomInput
            onchange={handleInput}
            value={state.name}
            placeholder="Name"
            name="name"
            type="text"
          />
          <CustomInput
            onchange={handleInput}
            value={state.lastname}
            placeholder="Lastname"
            name="lastname"
            type="text"
          />
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
            name="password"
            password
          />
          <Button loading={state.isLoading} full type="submit">
            Sign up
          </Button>
        </form>
        <p>
          Already have an account? <CustomLink to="/login">Login</CustomLink>
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
  }

  p {
    margin-top: 30px;
  }
`;

export default Register;
