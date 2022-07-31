import React from "react";
import styled from "styled-components";

const CheckboxLabel = ({ id, children }) => {
	return <StyledLabel htmlFor={id}>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
	font-size: 14px;
`;

export default CheckboxLabel;
