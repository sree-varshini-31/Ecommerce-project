// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import logo from "../assets/images/bg1-removebg-preview.png";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // send all fields to AuthContext
    login({ name, username, email, gender, country });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7fb]">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border border-pink-50 px-8 py-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Luvierra" className="h-12" />
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-[#261a20] text-center">
          Welcome back
        </h1>
        <p className="text-sm text-[#8b6f7a] mt-1 text-center">
          Sign in to continue your Luvierra journey.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#3c2831]">
              Full name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm text-[#3c2831] outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              placeholder="Your name"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-[#3c2831]">
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm text-[#3c2831] outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              placeholder="e.g. maria_fernanda"
            />
          </div>

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

          {/* Gender + Country on one row (desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-[#3c2831]">
                Gender
              </label>
              <select
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm text-[#3c2831] outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              >
                <option value="">Select gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-[#3c2831]">
                Country
              </label>
              <input
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm text-[#3c2831] outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                placeholder="India"
              />
            </div>
          </div>

          {/* Password (same as before) */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-[#3c2831]">
                Password
              </label>
              <button
                type="button"
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
