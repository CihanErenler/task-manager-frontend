import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 14px;
`;

const CheckboxLabel = ({ id, children }) => {
  return <StyledLabel htmlFor={id}>{children}</StyledLabel>;
};

export default CheckboxLabel;
