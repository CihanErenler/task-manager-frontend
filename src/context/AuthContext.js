import React, { useContext, useReducer } from "react";
import reducer from "../reducers/AuthReducer";
import { HANDLE_REMEMBER, LOGIN, UPDATE_LOGIN_PAGE } from "../reducerTypes";

const AuthContext = React.createContext();

const initialState = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  errMessage: "",
  showError: false,
  isRemember: false,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = () => {
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

  return (
    <AuthContext.Provider
      value={{ ...state, handleLogin, updateUpdatePage, handleIsRemember }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
