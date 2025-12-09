// src/components/ForgotPassword.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/forgot",
        null,
        { params: { email } }
      );

      const link = res.data;

      if (link && link.startsWith("http")) {
        toast.success("Reset link generated, redirecting...");
        window.location.href = link; // open /reset-password?token=...
      } else {
        toast.info("If this email exists, a reset link was generated.");
      }
    } catch (err) {
      toast.error("Failed to request password reset");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff7fb]">
      <div className="w-full max-w-md bg-white/90 shadow-xl rounded-3xl border border-pink-50 px-8 py-10">
        <h1 className="text-2xl font-semibold text-center">Forgot password</h1>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-pink-100 bg-[#fff9fc] px-4 py-3 text-sm"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-[#ff9ac8] via-[#ff8fb7] to-[#ffb08e] py-3 text-sm font-semibold text-white"
          >
            Send reset link
          </button>
        </form>
      </div>
    </div>
  );
}
export default   ForgotPassword