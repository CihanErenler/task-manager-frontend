import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";

const DropdownItem = ({ children }) => {
  return (
    <Div>
      <span>{children}</span>
      <Toggle />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default DropdownItem;
