import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import themes from "./theme";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";

export const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
	exit: { opacity: 0 },
};

export const transition = { type: "linear", duration: 0.4 };

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
`;

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);
	const theme = currentTheme ? themes.dark : themes.default;
	console.log(theme);

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Header />
				<AnimatedRoutes />
			</ThemeProvider>
		</>
	);
}

export default App;
