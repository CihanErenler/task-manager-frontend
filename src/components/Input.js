import React, { useState } from "react";
import styled from "styled-components";
import { BiShow, BiHide } from "react-icons/bi";

const CustomInput = ({
	value,
	onchange,
	placeholder,
	password,
	name,
	full,
	type,
	search,
}) => {
	const [show, setShow] = useState();

	const handleShow = () => {
		setShow(!show);
	};

	if (password) {
		return (
			<Section>
				<TextInput
					danger={value.danger}
					onChange={onchange}
					value={value.value}
					type={show ? "text" : "password"}
					placeholder={placeholder}
					name={name}
				/>
				{show ? (
					<BiHide onClick={handleShow} />
				) : (
					<BiShow onClick={handleShow} />
				)}
			</Section>
		);
	}

	if (search) {
		return (
			<Section>
				<TextInput
					onChange={onchange}
					value={value}
					type={type}
					placeholder={placeholder}
				/>
			</Section>
		);
	}

	return (
		<Section>
			<TextInput
				danger={value.danger}
				onChange={onchange}
				value={value.value}
				type={type}
				placeholder={placeholder}
				name={name}
			/>
		</Section>
	);
};

const Section = styled.section`
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-bottom: 20px;

	svg {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 22px;
		color: ${(props) => props.theme.textColorLight};
	}
`;

const TextInput = styled.input`
	width: 100%;
	height: 45px;
	border: 1px solid
		${(props) => (props.danger ? props.theme.danger : props.theme.inputBg)};
	border-radius: 6px;
	background-color: ${(props) => props.theme.inputBg};
	padding: 0 20px;

	transition: all 0.3s ease;
	font-size: 15px;

	:focus {
		box-shadow: 0 0 0 4px ${(props) => props.theme.buttonFocus};
		border-color: ${(props) => props.theme.inputBorderFocus};
		outline: none;
	}

	:hover {
		border-color: ${(props) => props.theme.primary};
	}
`;

export default CustomInput;
