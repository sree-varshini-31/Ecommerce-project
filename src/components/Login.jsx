// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/images/bg1-removebg-preview.png";
import { useAuth } from "./AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      const data = res.data; // make sure backend returns these fields

      // set user in AuthContext (for Profile page)
      login({
        name: data.name || "User",
        username: data.username || "",
        email: data.email || email,
        gender: data.gender || "Female",
        country: data.country || "India",
        dob: data.dob || "",
        phone: data.phoneNumber || "",
        city: data.city || "",
      });

      toast.success("Login successful");
      navigate("/home");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error("Invalid email or password");
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7fb]">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border border-pink-50 px-8 py-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Luvierra" className="h-12" />
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-[#261a20] text-center">
          Welcome 
        </h1>
        <p className="text-sm text-[#8b6f7a] mt-1 text-center">
          Sign in to continue your Luvierra journey.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#3c2831]">
              Email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm text-[#3c2831] outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-[#3c2831]">
                Password
              </label>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-xs text-pink-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm text-[#3c2831] outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-[#ff9ac8] via-[#ff8fb7] to-[#ffb08e] py-3 text-sm font-semibold text-white shadow-md hover:from-[#ff89bd] hover:to-[#ffa27d] focus:outline-none focus:ring-2 focus:ring-pink-100"
          >
            Login
          </button>

          <p className="text-xs text-center text-[#8b6f7a]">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-pink-500 font-medium hover:underline"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
