import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { variants, transition } from "../App";
import styled from "styled-components";
import Login from "../components/Login";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
	const { resetCredentials, currentLocation } = useAuthContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (currentLocation === "/dashboard") {
			navigate("/dashboard");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentLocation]);

	useEffect(() => {
		resetCredentials();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
