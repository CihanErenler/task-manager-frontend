import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";
import { useAuthContext } from "../context/authContext";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
  const { user } = useAuthContext();
  return (
    <StyledHeader>
      <Container>
        <StyledFlex>
          <ImageContainer>
            <Link to={user ? "/dashboard" : "/"}>
              <Image src={logo} />
            </Link>
          </ImageContainer>
          <StyledNav>
            {!user ? (
              <>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/login">Login</StyledLink>
                <Button link to="/register">
                  Sign up
                </Button>
              </>
            ) : user ? (
              <HeaderProfile name={user.name} lastname={user.lastname} />
            ) : (
              ""
            )}
          </StyledNav>
        </StyledFlex>
      </Container>
    </StyledHeader>
  );
};

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
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  margin-right: 40px;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: 600;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const Image = styled.img`
  width: 130px;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

export default Header;
