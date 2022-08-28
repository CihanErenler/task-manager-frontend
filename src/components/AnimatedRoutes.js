import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import FrontPage from "../pages/FrontPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import ProtectedAuthRoute from "./ProtectedAuthRoute";
import { AnimatePresence } from "framer-motion";
import Protected from "./Protected";
import AuthWrapper from "../pages/AuthWrapper";

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<AuthWrapper>
				<Routes location={location} key={location.pathname}>
					<Route exec path="/landing" element={<FrontPage />} />
					<Route
						exec
						path="/register"
						element={
							<ProtectedAuthRoute>
								<RegisterPage />
							</ProtectedAuthRoute>
						}
					/>
					<Route
						exec
						path="/login"
						element={
							<ProtectedAuthRoute>
								<LoginPage />
							</ProtectedAuthRoute>
						}
					/>
					<Route exec path="/about" element={<AboutPage />} />
					<Route
						exec
						path="/"
						element={
							<Protected>
								<DashboardPage />
							</Protected>
						}
					/>
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</AuthWrapper>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
