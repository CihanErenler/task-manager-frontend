import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomLink = ({ to, children, type }) => {
	return (
		<StyledLink to={to} type={type}>
			{children}
		</StyledLink>
	);
};

const StyledLink = styled(Link)`
	color: ${(props) =>
		props.type === "dark" ? props.theme.textColor : props.theme.primary};

	:hover {
		color: ${(props) =>
			props.type === "dark" ? props.theme.primary : props.theme.textcolor};
	}
`;

export default CustomLink;
