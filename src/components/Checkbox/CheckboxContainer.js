import React from "react";
import styled from "styled-components";

const CheckboxContainer = ({ children }) => {
	return <Div>{children}</Div>;
};

const Div = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: space-between;
`;

export default CheckboxContainer;
