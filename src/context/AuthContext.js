import React, { useContext, useReducer, useEffect, useState } from "react";
import reducer from "../reducers/AuthReducer";
import {
	CHECK_REGISTER_INFO,
	REMOVE_ALERT,
	HANDLE_REMEMBER,
	LOGIN,
	REGISTER,
	RESET_CREDENTIALS,
	SHOW_ALERT,
	UPDATE_LOGIN_PAGE,
	CHECK_LOGIN_INFO,
	UPDATE_REGISTER_PAGE,
	CANCEL_REGISTER_REQUEST,
	CANCEL_LOGIN_REQUEST,
	RESTORE_SAVED_USER,
} from "../reducerTypes";
import axios from "axios";

const AuthContext = React.createContext();

const initialState = {
	name: { value: "", danger: false },
	lastname: { value: "", danger: false },
	email: { value: "", danger: false },
	password: { value: "", danger: false },
	password2: { value: "", danger: false },
	alert: { show: false, type: "success", message: "" },
	currentLocation: "",
	checkRegister: false,
	loginChecked: false,
	isLoading: false,
	isRemember: false,
};

const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch({ type: CHECK_LOGIN_INFO });
	};

	const sendLoginRequest = async () => {
		const loginObj = {
			email: state.email.value,
			password: state.password.value,
		};
		try {
			const url = `${process.env.REACT_APP_BASE_URL}/login`;
			const result = await axios.post(url, loginObj);
			const token = result.data.token;
			if (result.status === 200) {
				console.log(token);
				dispatch({ type: LOGIN, payload: token });
			}
		} catch (error) {
			dispatch({ type: CANCEL_LOGIN_REQUEST });
			if (error.response.status === 400) {
				showAlert({
					show: true,
					type: "danger",
					message: error.response.data.message,
				});
			} else {
				showAlert({
					show: true,
					type: "danger",
					message: "Something went wrong",
				});
			}
		}
	};

	const updateUpdatePage = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		dispatch({ type: UPDATE_LOGIN_PAGE, payload: { name, value } });
	};

	const handleIsRemember = () => {
		dispatch({ type: HANDLE_REMEMBER });
	};

	const handleAlert = () => {
		dispatch({ type: REMOVE_ALERT });
	};

	const resetCredentials = () => {
		dispatch({ type: RESET_CREDENTIALS });
	};

	const updateRegisterPage = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		dispatch({ type: UPDATE_REGISTER_PAGE, payload: { name, value } });
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		dispatch({ type: CHECK_REGISTER_INFO });
	};

	const sendRegisterRequest = async () => {
		const registerObj = {
			name: state.name.value,
			lastname: state.lastname.value,
			email: state.email.value,
			password: state.password.value,
		};
		try {
			const url = `${process.env.REACT_APP_BASE_URL}/register`;
			const result = await axios.post(url, registerObj);
			console.log(result);
			if (result.status === 200) {
				dispatch({ type: REGISTER });
			}
		} catch (error) {
			dispatch({ type: CANCEL_REGISTER_REQUEST });
			if (error.response.status === 400) {
				showAlert({
					show: true,
					type: "danger",
					message: error.response.data.message,
				});
			} else {
				showAlert({
					show: true,
					type: "danger",
					message: "Something went wrong",
				});
			}
		}
	};

	const showAlert = (alert) => {
		dispatch({ type: SHOW_ALERT, payload: alert });
	};

	const checkSavedUser = () => {
		const savedUser = localStorage.getItem("saved_user");
		if (savedUser) {
			dispatch({ type: RESTORE_SAVED_USER, payload: savedUser });
		}
	};

	useEffect(() => {
		if (state.checkRegister) sendRegisterRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.checkRegister]);

	useEffect(() => {
		if (state.loginChecked) sendLoginRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.loginChecked]);

	return (
		<AuthContext.Provider
			value={{
				...state,
				handleRegister,
				handleLogin,
				updateUpdatePage,
				handleIsRemember,
				handleAlert,
				showAlert,
				resetCredentials,
				updateRegisterPage,
				checkSavedUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuthContext = () => {
	return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
