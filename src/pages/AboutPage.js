import React from "react";
import { motion } from "framer-motion";
import { variants, transition } from "../App";
import styled from "styled-components";
import image from "../assets/images/about-img-1.jpg";
import bottom from "../assets/images/about.svg";

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
					<h1>Our Story</h1>
					<img src={image} alt="about-image" />
					<IMG src={bottom} />
				</div>
				<div>
					<h2>Who we are?</h2>
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

const sectionStyles = {
	width: "100%",
	overflowX: "hidden",
};

const IMG = styled.img`
	position: absolute;
	z-index: 10;
	bottom: 0;
	left: 0;
	width: 100%;
`;

const Div = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: hidden !important;

	div:nth-child(2) {
		background-color: ${(props) => props.theme.bg1};
		padding: 30px;
		text-align: center;

		h2 {
			color: ${(props) => props.theme.primary};
			text-align: left;
			width: 70%;
			margin: auto;
			font-weight: 400;
			padding-bottom: 20px;
		}

		p {
			color: ${(props) => props.theme.textColorLight};
			line-height: 1.9;
			font-size: 18px;
			font-size: 1;
			font-weight: 200;
			width: 70%;
			margin: auto;
			text-align: left;
		}
	}

	div:nth-child(1) {
		position: relative;
		width: 100%;

		h1 {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			color: ${(props) => props.theme.bg1};
			text-align: center;
			padding-bottom: 20px;
			font-size: 40px;
			z-index: 10;
			font-weight: 400;
			border-bottom: 3px solid ${(props) => props.theme.primary};
		}

		img:nth-child(2) {
			width: 100%;
			height: 450px;
			object-fit: cover;
		}

		::after {
			content: "";
			position: absolute;
			background-color: rgba(10, 20, 50, 0.8);
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
	}
`;

export default AboutPage;
