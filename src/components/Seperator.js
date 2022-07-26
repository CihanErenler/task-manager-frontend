import React from "react";
import styled from "styled-components";

const Seperator = () => {
	return <Div></Div>;
};

const Div = styled.div`
	height: 1px;
	background-color: ${(props) => props.theme.border};
	width: 100%;
	margin: 10px 0;
	cursor: none;
`;

export default Seperator;
