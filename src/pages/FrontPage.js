import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { variants, transition } from "../App";
import { Container } from "../components";

const sectionStyles = {
	width: "100vw",
	height: "calc(100vh - 60px)",
};

// const Section = styled.section`
// 	width: 100vw;
// 	height: 100vh;
// 	background-color: ${(props) => props.theme.bg1};
// `;

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
			{/* <Container></Container> */}
		</motion.section>
	);
};

export default FrontPage;
