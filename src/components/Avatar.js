import React from "react";
import styled from "styled-components";

const Avatar = ({ src, alt, bg, size, action, buttonRef }) => {
	const firstLetters = alt
		.split(" ")
		.map((item) => item.charAt(0))
		.join("")
		.toUpperCase();

	return (
		<StyledAvatar size={size} onClick={action} bg={bg} ref={buttonRef}>
			{src ? <img src={src} alt={alt} /> : firstLetters}
		</StyledAvatar>
	);
};

const StyledAvatar = styled.button`
	width: ${(props) => (props.size ? props.size : "35px")};
	height: ${(props) => (props.size ? props.size : "35px")};
	background-color: ${(props) => (props.bg ? props.bg : props.theme.primary)};
	color: #fff;
	border: none;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
	font-size: 18px;
	cursor: pointer;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		cursor: pointer;
	}
`;

export default Avatar;
