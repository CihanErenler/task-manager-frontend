import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variants, transition } from "../App";
import styled from "styled-components";
import Register from "../components/Register";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";

const sectionStyles = {
  width: "100vw",
  height: "calc(100vh - 60px)",
};

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      style={sectionStyles}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={transition}
    >
      <Div>
        <Register />
      </Div>
    </motion.section>
  );
};

const Div = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.bg2};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export default RegisterPage;
