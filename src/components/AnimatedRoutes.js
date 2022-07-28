import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import FrontPage from "../pages/FrontPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exec path="/" element={<FrontPage />} />
        <Route exec path="/login" element={<LoginPage />} />
        <Route exec path="/register" element={<RegisterPage />} />
        <Route exec path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
