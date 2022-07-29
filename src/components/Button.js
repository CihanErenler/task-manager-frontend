import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const CommonStyles = css`
  height: 40px;
  display: grid;
  place-items: center;
  background-color: ${(props) =>
    props.variant === "secondary" ? props.theme.bg1 : props.theme.primary};
  color: ${(props) =>
    props.variant === "secondary"
      ? props.theme.primary
      : props.theme.buttonColor};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  :hover {
    background-color: ${(props) =>
      props.variant === "secondary"
        ? props.theme.bg2
        : props.theme.buttonHover};
  }

  :focus {
    box-shadow: 0 0 0 4px ${(props) => props.theme.buttonFocus};
  }

  :active {
    background-color: ${(props) =>
      props.variant === "secondary" ? props.theme.bg1 : props.theme.primary};
  }
`;

const StyledLink = styled(Link)`
  ${CommonStyles};
  width: 150px;
`;

const StyledButton = styled.button`
  ${CommonStyles}
  width: 150px;
`;

const StyledLongButton = styled.button`
  ${CommonStyles}
  width: 240px;
`;

const StyledLongLink = styled(Link)`
  ${CommonStyles}
  width: 240px;
`;

const FullButton = styled.button`
  ${CommonStyles}
  width: 100%;
`;

const Button = ({ children, action, link, to, large, full, type, variant }) => {
  if (link && large) {
    return (
      <StyledLongLink variant to={to} onClick={action}>
        {children}
      </StyledLongLink>
    );
  }

  if (link) {
    return (
      <StyledLink variant={variant} to={to}>
        {children}
      </StyledLink>
    );
  }

  if (large) {
    return (
      <StyledLongButton variant={variant} type={type} onClick={action}>
        {children}
      </StyledLongButton>
    );
  }

  if (full) {
    return (
      <FullButton variant={variant} type={type} onClick={action}>
        {children}
      </FullButton>
    );
  }

  return (
    <StyledButton variant={variant} type={type} onClick={action}>
      {children}
    </StyledButton>
  );
};

export default Button;
