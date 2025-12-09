// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import Navbar from "./components/Navbar";
import Hair from "./components/Hair";
import Home from "./components/Home";
import Bestsellers from "./components/Bestsellers";
import Fragrances from "./components/Fragrances";
import Makeup from "./components/Makeup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Skin from "./components/Skin";
import Combos from "./components/Combos";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
const App = () => {
  return (
    <div>
      {/* Toasts (react-toastify) */}
      <ToastContainer position="top-right" autoClose={3000} />

      <CartProvider>
        <ScrollToTop />
        <Navbar />

        <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

         <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/haircare" element={<Hair />} />
          <Route path="/skincare" element={<Skin />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/bestsellers" element={<Bestsellers />} />
          <Route path="/kits-combos" element={<Combos />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
           <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>

      {/* <Register/> */}
    </div>
  );
};

export default App;
