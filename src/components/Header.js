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

const Image = styled.img`
	width: 120px;
`;

const StyledNav = styled.nav``;

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<StyledFlex>
					<ImageContainer>
						<Image src={logo} />
					</ImageContainer>
					<StyledNav>
						<Button link to="/signup">
							Sign up
						</Button>
					</StyledNav>
				</StyledFlex>
			</Container>
		</StyledHeader>
	);
};

export default Header;
