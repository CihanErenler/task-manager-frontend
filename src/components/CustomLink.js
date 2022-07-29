import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
	color: ${(props) => props.theme.primary};
`;

const CustomLink = ({ to, children }) => {
	return <StyledLink to={to}>{children}</StyledLink>;
};

export default CustomLink;
