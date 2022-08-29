import React from "react";
import styled from "styled-components";

const Toggle = ({ isChecked, setIsChecked }) => {
	return (
		<StyledToggle checked={isChecked} onClick={() => setIsChecked(!isChecked)}>
			<span></span>
		</StyledToggle>
	);
};

const StyledToggle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		display: block;
		width: 42px;
		height: 24px;
		border-radius: 50px;
		background-color: ${(props) =>
			props.checked ? props.theme.primary : props.theme.inputBorder};
		border: 1px solid ${(props) => props.theme.inputBorder};
		cursor: pointer;
		position: relative;
		transition: all 0.3s ease;

		:hover {
			border-color: ${(props) => props.theme.buttonFocus};
		}

		::before {
			position: absolute;
			content: "";
			width: 16px;
			height: 16px;
			border-radius: 50%;
			background-color: ${(props) => props.theme.bg1};
			top: 3px;
			left: ${(props) => (props.checked ? "20px" : "3px")};
			transition: all 0.3s;
		}
	}
`;

export default Toggle;
