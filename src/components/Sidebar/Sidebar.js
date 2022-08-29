import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import links from "./links";
import { useDashboardContext } from "../../context/dashboardContext";
import Button from "../Button";
import Seperator from "../Seperator";
import { BsPlusLg } from "react-icons/bs";

const Sidebar = () => {
	const { currentContentName, handleCurrentContentName } =
		useDashboardContext();
	console.log(currentContentName);
	return (
		<StyledSidebar>
			<Logo symbol={true} />
			<div className="sidebar-wrapper">
				<div className="sidebar-nav">
					{links.map((link) => {
						const { name, icon } = link;
						return (
							<button
								key={name}
								className={`navbar-button ${
									currentContentName === name ? "active" : ""
								}`}
								onClick={() => handleCurrentContentName(name)}
							>
								<i>{icon}</i>
								{name}
							</button>
						);
					})}
				</div>
				<Button full> Create Project</Button>
			</div>
		</StyledSidebar>
	);
};

const StyledSidebar = styled.section`
	width: 300px;
	height: 100vh;
	border-right: 1px solid ${(props) => props.theme.border};
	padding: 0 20px 20px;
	display: flex;
	flex-direction: column;

	.navbar-button {
		height: 40px;
		display: block;
		width: 100%;
		border: none;
		background-color: transparent;
		cursor: pointer;
		color: ${(props) => props.theme.textColorLighter};
		display: flex;
		align-items: center;
		font-size: 18px;
		font-weight: bold;
		padding: 8px 0;
		margin-top: 10px;

		:first-child {
			margin-top: 30px;
		}

		i {
			margin-right: 18px;
			margin-left: 8px;
			font-size: 26px;
			color: ${(props) => props.theme.textColorLighter};
			height: 100%;
			display: flex;
			align-items: center;
		}
	}

	.navbar-button.active {
		background-color: ${(props) => props.theme.bg3};
		border-radius: 8px;
		color: ${(props) => props.theme.primary};

		i {
			color: ${(props) => props.theme.primary};
		}
	}

	.sidebar-wrapper {
		flex: 1;
		height: max-content;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

export default Sidebar;
