import React, { useContext, useReducer } from "react";
import reducer from "../reducers/AuthReducer";
import {
  CHECK_REGISTER_INFO,
  HANDLE_LOGIN_ALERT,
  HANDLE_REMEMBER,
  LOGIN,
  REGISTER,
  RESET_CREDENTIALS,
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
  checkRegister: false,
  loginChecked: false,
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
    dispatch({ type: HANDLE_LOGIN_ALERT });
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
    console.log(`${process.env.REACT_APP_BASE_URL}/register`);
    if (state.checkRegister) {
      try {
        const registerObj = {
          name: state.name,
          lastname: state.lastname,
          email: state.email,
          password: state.password,
        };
        const result = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/register`,
          registerObj
        );
        console.log(result);
        dispatch({ type: REGISTER, payload: result });
      } catch (error) {}
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        handleRegister,
        handleLogin,
        updateUpdatePage,
        handleIsRemember,
        handleAlert,
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
