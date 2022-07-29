import React, { useContext, useReducer, useEffect } from "react";
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
	UPDATE_REGISTER_PAGE,
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
		console.log("girdi");
		dispatch({ type: LOGIN });
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
			if (result.status === 200) {
				dispatch({ type: REGISTER });
			}
		} catch (error) {}
	};

	const showAlert = (alert) => {
		dispatch({ type: SHOW_ALERT, payload: alert });
	};

	useEffect(() => {
		if (state.checkRegister) sendRegisterRequest();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.checkRegister]);

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
