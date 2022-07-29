import {
	REMOVE_ALERT,
	HANDLE_REMEMBER,
	LOGIN,
	UPDATE_LOGIN_PAGE,
	RESET_CREDENTIALS,
	UPDATE_REGISTER_PAGE,
	REGISTER,
	CHECK_REGISTER_INFO,
	SHOW_ALERT,
} from "../reducerTypes";

// Login
const AuthReducer = (state, action) => {
	if (action.type === LOGIN) {
		const email = state.email.value;
		const password = state.password.value;

		if (!email || !password) {
			console.log("empty");
			const alert = {
				show: true,
				type: "warning",
				message: "Please fill in all empty fields",
			};
			const email = !email ? { value: "", danger: true } : state.email;
			const password = !password ? { value: "", danger: true } : state.password;
			const newState = {
				...state,
				alert,
				email,
				password,
			};
			return newState;
		}

		if (state.isRemember) {
			let user = localStorage.getItem("rememberedUser");
			if (user === null || user == "") {
				localStorage.setItem("rememberedUser", state.email);
			}
		}
		return state;
	}

	//Register
	if (action.type === CHECK_REGISTER_INFO) {
		let name = state.name.value;
		let lastname = state.lastname.value;
		let email = state.email.value;
		let password = state.password.value;
		let password2 = state.password2.value;

		if (!name || !lastname || !email || !password || !password2) {
			console.log("girdi");
			const alert = {
				show: true,
				type: "warning",
				message: "Please fill in all empty fields",
			};
			name = !name ? { value: "", danger: true } : state.name;
			lastname = !lastname ? { value: "", danger: true } : state.lastname;
			email = !email ? { value: "", danger: true } : state.email;
			password = !password ? { value: "", danger: true } : state.password;
			password2 = !password2 ? { value: "", danger: true } : state.password2;

			return { ...state, name, lastname, email, password, password2, alert };
		}

		if (password !== password2) {
			const alert = {
				show: true,
				type: "danger",
				message: "Passwords are not the same",
			};
			return { ...state, alert };
		}

		return {
			...state,
			checkRegister: true,
			isLoading: true,
			alert: {
				show: true,
				type: "success",
				message: "Registered successfully",
			},
		};
	}

	if (action.type === REGISTER) {
		const newState = {
			...state,
			currentLocation: "/login",
		};
		return newState;
	}

	// Reset the credentials on novigating to a different page
	if (action.type === RESET_CREDENTIALS) {
		const newState = {
			...state,
			name: { value: "", danger: false },
			lastname: { value: "", danger: false },
			email: { value: "", danger: false },
			password: { value: "", danger: false },
			password2: { value: "", danger: false },
			currentLocation: "",
			isLoading: false,
		};
		return newState;
	}

	// Handle login inputs
	if (action.type === UPDATE_LOGIN_PAGE) {
		const { name, value } = action.payload;
		const newState = {
			...state,
			[name]: { value, danger: state[name].danger },
		};
		return newState;
	}

	// Handle remember me checkbox on login page
	if (action.type === HANDLE_REMEMBER) {
		const newState = { ...state, isRemember: !state.isRemember };

		return newState;
	}

	// Handle alert
	if (action.type === REMOVE_ALERT) {
		const alert = { show: false, type: "success", message: "" };
		const newState = { ...state, alert };
		return newState;
	}

	// Dispay alert with the specified content
	if (action.type === SHOW_ALERT) {
		const { show, type, message } = action.payload;
		const newAlert = { show, type, message };
		const newState = { ...state, alet: newAlert };
		return newState;
	}

	if (action.type === UPDATE_REGISTER_PAGE) {
		const { name, value } = action.payload;
		const newState = {
			...state,
			[name]: { value, danger: false },
		};
		return newState;
	}

	return state;
};

export default AuthReducer;
