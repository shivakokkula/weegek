import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import config from "./constants";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('jwtToken');
    if (token) {
      axios.get("/api/me", { 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
    }
  }, []);

  const login = async (email, password) => {
    const res = await axios.post(
      `${config.SERVER_URL}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      }
    );
    // const res = await axios.post(config.SERVER_URL+"/login", { username: email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const register = async (name, email, password) => {
    const res = await axios.post(config.SERVER_URL+"/register", { name, email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const logout = async () => {
    try {
      await axios.post(`${config.SERVER_URL}/logout`, {}, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear the cookie client-side as fallback
      Cookies.remove('jwtToken');
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
