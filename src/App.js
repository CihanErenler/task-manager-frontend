import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import themes from "./theme";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "./context/authContext";
import { useNavigate } from "react-router-dom";

export const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 },
};

export const transition = { type: "linear", duration: 0.3 };

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);
	const theme = currentTheme ? themes.dark : themes.default;
	const { getUserFromLocalStorage, user } = useAuthContext();
	const navigate = useNavigate();

	useEffect(() => {
		getUserFromLocalStorage();
	}, []);

	useEffect(() => {
		if (user) {
			navigate("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Header />
				<AnimatedRoutes />
			</ThemeProvider>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				transition={Slide}
				rtl={false}
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
}

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Fira Code', monospace;
    font-family: 'Inter', sans-serif;
  }

  a {
	text-decoration: none;
  }
`;

export default App;
