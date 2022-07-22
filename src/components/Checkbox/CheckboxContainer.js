import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

const CheckboxContainer = ({ children }) => {
  return <Div>{children}</Div>;
};

export default CheckboxContainer;
