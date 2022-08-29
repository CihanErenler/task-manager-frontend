import { SET_DASHBOARD_CONTENT_NAME } from "./reducerTypes";

const dashboardReducer = (state, action) => {
	if (action.type === SET_DASHBOARD_CONTENT_NAME) {
		const name = action.payload;
		const newState = { ...state, currentContentName: name };
		return newState;
	}

	return state;
};

export default dashboardReducer;
