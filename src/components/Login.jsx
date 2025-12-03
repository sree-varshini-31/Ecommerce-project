// src/pages/Login.jsx
import React from 'react';
import logo from '../assets/images/bg1-removebg-preview.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

export default function Login() {
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

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#3c2831]">
              Email address
            </label>
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm text-[#3c2831] outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
              placeholder="you@example.com"
            />
          </div>

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

          <div className="flex items-center gap-3 text-xs text-gray-400">
            <div className="h-px flex-1 bg-pink-100" />
            <span>Or login with</span>
            <div className="h-px flex-1 bg-pink-100" />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-pink-100 bg-white py-2 text-xs font-medium text-[#3c2831] hover:bg-pink-50"
            >
              <FcGoogle className="text-lg" />
              Google
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-pink-100 bg-white py-2 text-xs font-medium text-[#3c2831] hover:bg-pink-50"
            >
              <FaFacebookF className="text-[#1877F2] text-lg" />
              Facebook
            </button>
          </div>

          <p className="text-xs text-center text-[#8b6f7a]">
            Don&apos;t have an account?{' '}
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
