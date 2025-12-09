// src/components/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // add dob, phone, city
  const login = ({ name, username, email, gender, country, dob, phone, city }) => {
    const style = gender === "Female" ? "lorelei" : "adventurer";

    const seed =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;

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
      dob,
      phone,
      city,
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
