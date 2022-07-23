import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledFlex = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  margin: 0 50px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const Image = styled.img`
  width: 120px;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledFlex>
          <ImageContainer>
            <Link to="/">
              <Image src={logo} />
            </Link>
          </ImageContainer>
          <StyledNav>
            <StyledLink to="/about">About</StyledLink>
            <Button link to="/register">
              Sign up
            </Button>
          </StyledNav>
        </StyledFlex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
