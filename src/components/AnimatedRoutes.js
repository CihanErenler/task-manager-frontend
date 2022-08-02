import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import FrontPage from "../pages/FrontPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exec path="/" element={<FrontPage />} />
        <Route exec path="/register" element={<RegisterPage />} />
        <Route exec path="/about" element={<AboutPage />} />
        <Route exec path="/dashboard" element={<DashboardPage />} />
        <Route exec path="/login" element={<LoginPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
