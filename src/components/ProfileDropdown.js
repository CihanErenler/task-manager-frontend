import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/authContext";
import Seperator from "./Seperator";
import DropdownItem from "./DropdownItem";
import Avatar from "./Avatar";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";

const ProfileDropdown = ({ fullName, handleProfile, buttonRef }) => {
	const { logoutUser, user } = useAuthContext();
	const sectionRef = useRef(null);

	useEffect(() => {
		const handleClick = (e) => {
			console.log(e.target);
			if (
				!sectionRef.current.contains(e.target) &&
				e.path[0] !== buttonRef.current
			)
				handleProfile(false);
		};

		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);
	return (
		<motion.div
			key="profile-dropdown"
			initial={{ scale: 0.9, opacity: 0, y: 30 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
			exit={{ scale: 0.9, opacity: 0 }}
		>
			<Div ref={sectionRef}>
				<section>
					<Avatar alt={fullName} />
					<div>
						<p>{fullName}</p>
						<p>{user.email}</p>
					</div>
				</section>
				<Seperator />
				<DropdownItem>Active Status</DropdownItem>
				<DropdownItem>Dark Mode</DropdownItem>
				<Seperator />
				<div className="link">
					<CustomLink to="/settings" type="dark">
						Settings
					</CustomLink>
				</div>
				<div className="logout-btn" onClick={logoutUser}>
					Log out
				</div>
			</Div>
		</motion.div>
	);
};

const Div = styled.div`
	position: absolute;
	width: 300px;
	background-color: ${(props) => props.theme.bg1};
	border-radius: 20px;
	right: 10px;
	box-shadow: rgba(50, 50, 93, 0.1) 0px 6px 12px -2px,
		rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
	padding: 20px 0;
	font-size: 14px;
	display: flex;
	flex-direction: column;
	gap: 8px;

	.link {
		padding: 0 20px;
	}

	> div {
		padding: 0 20px;
		transition: all 0.3s ease;
		color: ${(props) => props.theme.textColor};
		cursor: pointer;

		:hover {
			color: ${(props) => props.theme.primary};
		}
	}

	> section {
		display: flex;
		align-items: center;
		padding: 0 20px;
		> div {
			p:nth-child(1) {
				color: ${(props) => props.theme.textColor};
				font-weight: 700;
				margin-bottom: 3px;
				font-size: 15px;
			}

			p:nth-child(2) {
				color: ${(props) => props.theme.textColorLight};
				font-size: 12px;
				letter-spacing: 1px;
			}
		}
	}
`;

export default ProfileDropdown;
