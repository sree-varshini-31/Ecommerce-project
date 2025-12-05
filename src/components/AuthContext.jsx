// src/components/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = ({ name, username, email, gender, country }) => {
    // 1. Pick DiceBear style based on gender
    // lorelei  -> more feminine
    // adventurer -> more neutral/masculine
    const style = gender === "Female" ? "lorelei" : "adventurer"; // [web:146][web:144]

    // 2. Random seed so avatar is unique every login
    const seed =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;

    // 3. New DiceBear HTTP API (v9)
    // Docs: https://api.dicebear.com/9.x/{style}/svg?seed=... [web:133][web:154]
    const avatarUrl = `https://api.dicebear.com/9.x/${style}/svg?seed=${encodeURIComponent(
      seed
    )}&radius=50&backgroundColor=f0f9ff,fff1f2,e8f5e9`;

    const fakeUser = {
      id: 1,
      name,
      username,
      email,
      gender,
      country,
      avatarUrl,
    };

    setUser(fakeUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
