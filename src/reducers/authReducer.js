import { toast } from "react-toastify";
import { LOGIN_USER, SET_LOADING } from "./reducerTypes.js";

const authReducer = (state, action) => {
  // Loging the user
  if (action.type === LOGIN_USER) {
    const user = action.payload;
    const newState = { ...state, user, isLoading: false };
    return newState;
  }

  if (action.type === SET_LOADING) {
    const newState = { ...state, isLoading: true };
    return newState;
  }

  return state;
};

export default authReducer;
