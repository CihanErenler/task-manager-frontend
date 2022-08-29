import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Button";
import { useAuthContext } from "../context/authContext";
import HeaderProfile from "./HeaderProfile";
import { useLocation } from "react-router-dom";
import { useDashboardContext } from "../context/dashboardContext";
import Logo from "./Logo";

const Header = () => {
	const { user } = useAuthContext();
	const location = useLocation();
	const { currentContentName } = useDashboardContext();

	return (
		<StyledHeader location={location.pathname}>
			<Container>
				<div className="navbar">
					{!user ? <Logo /> : <h1>{currentContentName}</h1>}
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
				</div>
			</Container>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	height: 60px;
	width: 100%;
	border-bottom: ${(props) =>
		props.location !== "/landing" ? `1px solid ${props.theme.border}` : "none"};

	.navbar {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h1 {
		color: ${(props) => props.theme.textColor};
		font-size: 24px;
		font-weight: 600;
	}
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

const StyledNav = styled.nav`
	display: flex;
	align-items: center;
`;

export default Header;
