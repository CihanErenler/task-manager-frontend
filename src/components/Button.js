import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
	width: 150px;
	height: 40px;
	display: grid;
	place-items: center;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.buttonColor};
	border: none;
	border-radius: 10px;
	font-size: 18px;
	cursor: pointer;
	transition: all 0.3s ease;
	text-decoration: none;

	:hover {
		background-color: ${(props) => props.theme.buttonHover};
	}

	:focus {
		box-shadow: 0 0 0 4px ${(props) => props.theme.buttonFocus};
	}
`;

const StyledButton = styled.button`
	width: 150px;
	height: 40px;
	display: grid;
	place-items: center;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.buttonColor};
	border: none;
	border-radius: 10px;
	font-size: 18px;
	cursor: pointer;
	transition: all 0.3s ease;

	:hover {
		background-color: ${(props) => props.theme.buttonHover};
	}

	:focus {
		box-shadow: 0 0 0 4px ${(props) => props.theme.buttonFocus};
	}
`;

const StyledLongButton = styled(StyledButton)`
	width: 240px;
`;

const Button = ({ children, action, link, to, long }) => {
	if (link) {
		return <StyledLink to={to}>{children}</StyledLink>;
	}

	if (long) {
		<StyledLongButton onClick={action}>{children}</StyledLongButton>;
	}

	return <StyledButton onClick={action}>{children}</StyledButton>;
};

export default Button;
