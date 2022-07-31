import React, { useEffect } from "react";
import styled from "styled-components";
import { RiErrorWarningFill, RiInformationFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const handleColor = (val) => {
	switch (val) {
		case "warning":
			return "#fff8e6";
		case "danger":
			return "#fff5f5";
		case "info":
			return "#ebf3fc";
		default:
			return "#e6ffea";
	}
};

const Alert = ({ children, warningType, action }) => {
	useEffect(() => {
		const alertTimeOut = setTimeout(() => {
			action();
			clearTimeout(alertTimeOut);
		}, 4000);
	}, []);
	const handleIcon = (val) => {
		switch (val) {
			case "warning":
				return (
					<RiErrorWarningFill style={{ color: "#ffc022", fontSize: 30 }} />
				);
			case "danger":
				return (
					<RiErrorWarningFill style={{ color: "#ff5555", fontSize: 30 }} />
				);
			case "info":
				return <RiInformationFill style={{ color: "#3486e7", fontSize: 30 }} />;
			default:
				return (
					<RiErrorWarningFill style={{ color: "#48d862", fontSize: 30 }} />
				);
		}
	};

	return (
		<motion.div
			key="alert"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<WarningAlert warningType={warningType}>
				{handleIcon(warningType)}
				{children}
			</WarningAlert>
		</motion.div>
	);
};

const WarningAlert = styled.section`
	min-width: 400px;
	max-width: 100%;
	height: 60px;
	border: 1px solid ${(props) => props.theme.inputBorder};
	position: fixed;
	bottom: 70px;
	right: 50px;
	place-items: left;
	box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
		rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
	border-radius: 10px;
	padding-left: 70px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${(props) => handleColor(props.warningType)};
	color: ${(props) => props.theme.textColorLight};
	font-size: 14px;
	z-index: 9999;

	svg {
		position: absolute;
		top: 50%;
		left: 30px;
		transform: translateY(-50%);
	}
`;

export default Alert;
