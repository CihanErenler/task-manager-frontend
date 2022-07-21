import React from "react";
import { motion } from "framer-motion";
import { variants, transition } from "../App";
import styled from "styled-components";
import Login from "../components/Login";

const Div = styled.div`
  background-color: ${(props) => props.theme.bg2};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const sectionStyles = {
  width: "100vw",
  height: "calc(100vh - 60px)",
};

const LoginPage = () => {
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
        <Login />
      </Div>
    </motion.section>
  );
};

export default LoginPage;
