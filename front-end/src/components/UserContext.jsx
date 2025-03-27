import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios.get("http://localhost:5000/me", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data.user))
      .catch(() => localStorage.removeItem("token"));
    }
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};