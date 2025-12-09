
// src/components/ResetPassword.jsx
import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/auth/reset", {
        token,
        newPassword: password,
      });

      toast.success("Password reset successfully");
      navigate("/login");
    } catch (err) {
      toast.error("Invalid or expired reset link");
    }
  };

  if (!token) {
    return <p className="text-center mt-10">Invalid reset link</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7fb]">
      <div className="w-full max-w-md bg-white/90 shadow-xl rounded-3xl border border-pink-50 px-8 py-10">
        <h1 className="text-2xl font-semibold text-center">Reset password</h1>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">New password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-[#ff9ac8] via-[#ff8fb7] to-[#ffb08e] py-3 text-sm font-semibold text-white"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
}
export default ResetPassword