import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	max-width: 75rem;
	margin: auto;
	height: 100%;
	padding: 0 20px;
`;

const Container = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
