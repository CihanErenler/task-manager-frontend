import React, { useContext, useReducer } from "react";
import reducer from "../reducers/AuthReducer";
import {
  HANDLE_LOGIN_ALERT,
  HANDLE_REMEMBER,
  LOGIN,
  RESET_CREDENTIALS,
  UPDATE_LOGIN_PAGE,
} from "../reducerTypes";

const AuthContext = React.createContext();

const initialState = {
  name: { value: "", danger: false },
  lastname: { value: "", danger: false },
  email: { value: "", danger: false },
  password: { value: "", danger: false },
  errMessage: "",
  alert: { show: false, type: "success", message: "" },
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

  return (
    <AuthContext.Provider
      value={{
        ...state,
        handleLogin,
        updateUpdatePage,
        handleIsRemember,
        handleAlert,
        resetCredentials,
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
