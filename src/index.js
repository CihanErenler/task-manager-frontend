import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { DashboardProvider } from "./context/dashboardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthProvider>
			<DashboardProvider>
				<Router>
					<App />
				</Router>
			</DashboardProvider>
		</AuthProvider>
	</React.StrictMode>
);
