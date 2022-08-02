import React from "react";
import styled from "styled-components";
import notFound from "../assets/404.svg";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { variants, transition } from "../App";

const sectionStyles = {
  width: "100vw",
  height: "calc(100vh - 60px)",
};

const NotFoundPage = () => {
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
        <img src={notFound} alt="404 page" />
        <p>This page is not on the map</p>
        <Button variant="secondary" link to="/">
          Back to Home
        </Button>
      </Div>
    </motion.section>
  );
};

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  img {
    width: 20%;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.textColorLight};
  }
`;

export default NotFoundPage;
