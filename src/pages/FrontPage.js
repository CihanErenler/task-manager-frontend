import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { variants, transition } from "../App";
import Container from "../components/Container";
import Button from "../components/Button";
import hero from "../assets/hero.svg";
import corner from "../assets/leftcorner.svg";

const sectionStyles = {
  width: "100vw",
  height: "calc(100vh - 60px)",
};

const FlexDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    h1 {
      @media (max-width: 15500px) {
        font-size: 2.2rem;
      }
      font-size: 3rem;
      font-weight: 700;
    }

    h4 {
      font-size: 1.5rem;
      font-weight: 400;
      margin: 20px 0;
      @media (max-width: 15500px) {
        font-size: 1.3rem;
      }
    }

    span {
      color: ${(props) => props.theme.primary};
    }
  }

  div:last-child {
    display: grid;
    place-items: center;
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledCorner = styled.img`
  display: block;
  position: absolute;
  width: 30%;
  left: 0;
  bottom: 0;
`;

const FrontPage = () => {
  return (
    <motion.section
      style={sectionStyles}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={transition}
    >
      <Container>
        <FlexDiv>
          <div>
            <h1>Team up with friends</h1>
            <h1>
              Create <span>awesome</span> projects
            </h1>
            <h4>A perfect project development tool for your team</h4>
            <Button long={true}>Start Now</Button>
          </div>
          <div>
            <StyledImage src={hero} />
          </div>
        </FlexDiv>
        <StyledCorner src={corner} />
      </Container>
    </motion.section>
  );
};

export default FrontPage;
