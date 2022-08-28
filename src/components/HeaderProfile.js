import React, { useState, useRef, useEffect } from "react";
import Avatar from "./Avatar";
import styled from "styled-components";
import Notification from "./Notification";
import ProfileDropdown from "./ProfileDropdown";
import { AnimatePresence } from "framer-motion";

const HeaderProfile = ({ name, lastname }) => {
	const [showProfile, setShowProfile] = useState(false);
	const buttonRef = useRef(null);

	const handleProfile = () => {
		setShowProfile(!showProfile);
	};

	const fullName = `${name} ${lastname}`;
	return (
		<Div>
			<Notification />
			<Avatar alt={fullName} action={handleProfile} buttonRef={buttonRef} />
			<AnimatePresence>
				{showProfile ? (
					<ProfileDropdown
						fullName={fullName}
						handleProfile={handleProfile}
						buttonRef={buttonRef}
					/>
				) : (
					""
				)}
			</AnimatePresence>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export default HeaderProfile;
