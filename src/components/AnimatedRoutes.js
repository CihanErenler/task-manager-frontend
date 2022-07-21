import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import FrontPage from "../pages/FrontPage";
import LoginPage from "../pages/LoginPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exec path="/" element={<FrontPage />} />
        <Route exec path="/login" element={<LoginPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
