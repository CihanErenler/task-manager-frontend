import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import DashboardContent from "../components/Content/DashboardContent.js";
import MyTasksContent from "../components/Content/MyTasksContent";
import ChatsContent from "../components/Content/ChatsContent";
import PeopleContent from "../components/Content/PeopleContent";
import Header from "../components/Header";
import { useDashboardContext } from "../context/dashboardContext";

const DashboardPage = () => {
	const { currentContentName } = useDashboardContext();
	const [content, setContent] = useState(DashboardContent);

	useEffect(() => {
		if (currentContentName === "Home") {
			setContent(DashboardContent);
		}
		if (currentContentName === "My Tasks") {
			setContent(MyTasksContent);
		}
		if (currentContentName === "Inbox") {
			setContent(ChatsContent);
		}
		if (currentContentName === "People") {
			setContent(PeopleContent);
		}
	}, [currentContentName]);

	return (
		<section>
			<Div>
				<Sidebar />
				<StyledContent>
					<Header />
					{content}
				</StyledContent>
			</Div>
		</section>
	);
};

const Div = styled.div`
	display: flex;
`;

const StyledContent = styled.div`
	flex: 1;
`;

export default DashboardPage;
