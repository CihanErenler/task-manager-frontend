import React from "react";
import Spinner from "../components/Spinner";
import { useAuthContext } from "../context/authContext";
import styled from "styled-components";

const AuthWrapper = ({ children }) => {
	const { isUserLoading } = useAuthContext();
	if (isUserLoading) {
		return (
			<Div>
				<Spinner />
			</Div>
		);
	}
	return children;
};

const Div = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;
`;

export default AuthWrapper;
