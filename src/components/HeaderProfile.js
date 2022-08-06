import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";

const HeaderProfile = ({ name, lastname }) => {
  const fullName = `${name} ${lastname}`;
  return (
    <Div>
      <Avatar alt={fullName} />
      <span>{name}</span>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    color: ${(props) => props.theme.textColor};
  }
`;

export default HeaderProfile;
