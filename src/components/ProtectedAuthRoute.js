import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const ProtectedAuthRoute = ({ children }) => {
	const { user } = useAuthContext();
	if (user) {
		return <Navigate to="/" />;
	}

	return children;
};

export default ProtectedAuthRoute;
