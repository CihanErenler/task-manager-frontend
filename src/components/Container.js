import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
	max-width: 85rem;
	margin: auto;
	height: 100%;
	padding: 0 20px;
`;

export default Container;
