import React from "react";
import { motion } from "framer-motion";
import { variants, transition } from "../App";
import styled from "styled-components";
import image from "../assets/images/about-img-1.jpg";

const sectionStyles = {
  width: "100vw",
  height: "calc(100vh - 60px)",
};

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100%;
  overflow: hidden;

  div:nth-child(2) {
    background-color: ${(props) => props.theme.bg1};
    padding: 100px 30px;
    text-align: center;

    h1 {
      color: ${(props) => props.theme.primary};
      text-align: center;
      padding-bottom: 20px;
      font-size: 40px;
    }

    p {
      color: ${(props) => props.theme.textColorLight};
      line-height: 1.9;
      font-size: 18px;
      font-size: 1;
      font-weight: 300;
      width: 80%;
      margin: auto;
    }
  }

  div:nth-child(1) {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ::after {
      content: "";
      position: absolute;
      background-color: rgba(0, 20, 50, 0.7);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
`;

const AboutPage = () => {
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
        <div>
          <img src={image} alt="about-image" />
        </div>
        <div>
          <h1>Our Story</h1>
          <p>
            Colby.io is a advance project management app which helps you and
            your team to create and develope increadable apps and project. It
            has started as a hobby project and the initial intention was to
            create and management platform for the student group but after
            adding new funtuionalties by time it growed and now it is one of the
            biggist project management platform out there.
          </p>
        </div>
      </Div>
    </motion.section>
  );
};

export default AboutPage;
