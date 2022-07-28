import {
  HANDLE_LOGIN_ALERT,
  HANDLE_REMEMBER,
  LOGIN,
  UPDATE_LOGIN_PAGE,
  RESET_CREDENTIALS,
} from "../reducerTypes";

const AuthReducer = (state, action) => {
  if (action.type === LOGIN) {
    if (state.email.value === "" || state.password.value === "") {
      console.log("empty");
      const alert = {
        show: true,
        type: "warning",
        message: "Please fill in all empty fields",
      };
      const email =
        state.email.value === "" ? { value: "", danger: true } : state.email;
      const password =
        state.password.value === ""
          ? { value: "", danger: true }
          : state.password;
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

  if (action.type === RESET_CREDENTIALS) {
    const newState = {
      ...state,
      email: { value: "", danger: false },
      password: { value: "", danger: false },
      alert: { show: false, type: "", message: "" },
    };
    return newState;
  }

  if (action.type === UPDATE_LOGIN_PAGE) {
    const { name, value } = action.payload;
    const newState = {
      ...state,
      [name]: { value, danger: state[name].danger },
    };
    return newState;
  }

  if (action.type === HANDLE_REMEMBER) {
    const newState = { ...state, isRemember: !state.isRemember };

    return newState;
  }

  if (action.type === HANDLE_LOGIN_ALERT) {
    const alert = { show: false, type: "success", message: "" };
    const newState = { ...state, alert };
    return newState;
  }

  return state;
};

export default AuthReducer;
