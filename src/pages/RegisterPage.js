import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { variants, transition } from "../App";
import styled from "styled-components";
import Register from "../components/Register";
import Alert from "../components/Alert";
import { useAuthContext } from "../context/AuthContext";
import { AnimatePresence } from "framer-motion";

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

const RegisterPage = () => {
  const { alert, handleAlert, resetCredentials } = useAuthContext();
  useEffect(() => {
    resetCredentials();
  });

  useEffect(() => {});

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
      <AnimatePresence>
        {alert.show ? (
          <Alert warningType="warning" action={handleAlert}>
            Please fill in all empty fields
          </Alert>
        ) : (
          ""
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default RegisterPage;