import { Router, Route, useLocation, Routes } from "react-router-dom";
import FrontPage from "../pages/FrontPage";
import { AnimatePresence } from "framer-motion";

import React from "react";

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" exec element={<FrontPage />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
