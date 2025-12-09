// src/components/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../assets/images/bg1-removebg-preview.png";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        name,
        dob,
        phoneNumber,
        city,
        email,
        password,
      });

      toast.success("Registered successfully");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.status === 500) {
        // your backend throws RuntimeException("Email already registered")
        toast.error("Email already registered");
      } else {
        toast.error("Registration failed. Please try again.");
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
          Create account
        </h1>
        <p className="text-sm text-[#8b6f7a] mt-1 text-center">
          Join Luvierra to start your journey.
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

          {/* DOB */}
          <div>
            <label className="block text-sm font-medium text-[#3c2831]">
              Date of birth
            </label>
            <input
              type="date"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm text-[#3c2831] outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-[#3c2831]">
              Phone number
            </label>
            <input
              type="text"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm text-[#3c2831] outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              placeholder="1234567890"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-[#3c2831]">
              City
            </label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm text-[#3c2831] outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              placeholder="Mumbai"
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

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#3c2831]">
              Password
            </label>
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
            Register
          </button>

          <p className="text-xs text-center text-[#8b6f7a]">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-pink-500 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
