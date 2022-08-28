import React, { useContext, useReducer } from "react";
import reducer from "../reducers/authReducer";
import customFetch from "../utils/db";
import { toast } from "react-toastify";
import {
	LOGIN_USER,
	LOGOUT_USER,
	SET_LOADING,
	USER_LOADING,
} from "../reducers/reducerTypes";

const AuthContext = React.createContext();

const initialState = {
	isUserLoading: false,
	isLoading: false,
	user: null,
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const loginUser = async (user) => {
		try {
			dispatch({ type: SET_LOADING });
			const res = await customFetch.post("/auth/login", user);
			const userData = res.data.user;
			console.log(userData);
			dispatch({ type: LOGIN_USER, payload: userData });
			addUserToLocalStorage(userData);
			toast.success(`Welcome ${userData.name}`);
		} catch (error) {
			console.log(error);
			const message =
				error.response.status === 400
					? error.response.data.message
					: "Something went wrong";
			toast.error(message);
		}
	};

	const logoutUser = () => {
		dispatch({ type: LOGOUT_USER });
		removeUserFromLocalStorage();
		toast.success("Logged out successfully");
	};

	const addUserToLocalStorage = (user) => {
		localStorage.setItem("user", JSON.stringify(user));
	};

	const removeUserFromLocalStorage = () => {
		localStorage.removeItem("user");
	};

	const getUserFromLocalStorage = () => {
		dispatch({ type: USER_LOADING, payload: true });
		if (localStorage.getItem("user")) {
			const user = JSON.parse(localStorage.getItem("user"));
			dispatch({ type: LOGIN_USER, payload: user });
		}
		dispatch({ type: USER_LOADING, payload: false });
	};

	const registerUser = (user) => {
		console.log(user);
	};
	return (
		<AuthContext.Provider
			value={{
				...state,
				loginUser,
				logoutUser,
				registerUser,
				addUserToLocalStorage,
				removeUserFromLocalStorage,
				getUserFromLocalStorage,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
