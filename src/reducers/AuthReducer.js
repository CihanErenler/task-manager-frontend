import { LOGIN, UPDATE_LOGIN_PAGE } from "../reducerTypes";

const AuthReducer = (state, action) => {
  if (action.type === LOGIN) {
    console.log("Login reducer");
    return state;
  }

  if (action.type === UPDATE_LOGIN_PAGE) {
    const { name, value } = action.payload;
    const newState = { ...state, [name]: value };
    return newState;
  }

  return state;
};

export default AuthReducer;
