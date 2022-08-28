import {
	LOGIN_USER,
	LOGOUT_USER,
	SET_LOADING,
	USER_LOADING,
} from "./reducerTypes.js";

const authReducer = (state, action) => {
	// Loging the user
	if (action.type === LOGIN_USER) {
		const user = action.payload;
		const newState = { ...state, user, isLoading: false };
		return newState;
	}

	if (action.type === LOGOUT_USER) {
		const newState = { ...state, user: null };
		return newState;
	}

	if (action.type === SET_LOADING) {
		const newState = { ...state, isLoading: true };
		return newState;
	}

	if (action.type === USER_LOADING) {
		const newState = { ...state, isUserLoading: action.payload };
		return newState;
	}

	return state;
};

export default authReducer;
