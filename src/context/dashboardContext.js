import React, { useReducer, useContext } from "react";
import reducer from "../reducers/dashboardReducer";
import { SET_DASHBOARD_CONTENT_NAME } from "../reducers/reducerTypes";

const DashboardContext = React.createContext();

const initialState = {
	currentContentName: "Home",
	something: false,
};

const DashboardProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleCurrentContentName = (currentName) => {
		dispatch({ type: SET_DASHBOARD_CONTENT_NAME, payload: currentName });
	};

	return (
		<DashboardContext.Provider value={{ ...state, handleCurrentContentName }}>
			{children}
		</DashboardContext.Provider>
	);
};

const useDashboardContext = () => {
	return useContext(DashboardContext);
};

export { DashboardProvider, useDashboardContext };
