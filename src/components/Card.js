import React from "react";
import styled from "styled-components";

const Card = ({ height, width, children }) => {
	return (
		<Section height={height} width={width}>
			{children}
		</Section>
	);
};

const Section = styled.section`
	background-color: ${(props) => props.theme.bg1};
	padding: 20px;
	border-radius: 10px;
	width: ${(props) => props.width && props.width};
	max-width: ${(props) => props.width && props.width};
	height: ${(props) => props.height && props.height};
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 16px;
`;

export default Card;
