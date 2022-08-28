import React, { useState } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";

const DropdownItem = ({ children }) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<Section className="dropdown-item">
			<span>{children}</span>
			<Toggle isChecked={isChecked} setIsChecked={setIsChecked} />
		</Section>
	);
};

const Section = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export default DropdownItem;
