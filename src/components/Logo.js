import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import icon from "../assets/symbol.svg";
import { Link } from "react-router-dom";

const Logo = ({ symbol }) => {
	return (
		<ImageContainer>
			<Link to="/">
				<Image symbol={symbol} src={symbol ? icon : logo} />
			</Link>
		</ImageContainer>
	);
};

const ImageContainer = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
`;

const Image = styled.img`
	width: ${(props) => (props.symbol ? "35px" : "130px")};
	margin: ${(props) => (props.symbol ? "8px 0 0 8px" : "")};
`;

export default Logo;
