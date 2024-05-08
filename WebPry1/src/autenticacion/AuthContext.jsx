import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    /*
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded && decoded.username) {
          setUser({ username: decoded.username });
        } else {
          console.log('Token no válido o expirado');
          localStorage.removeItem('token');
          localStorage.setItem('isAuth', false)
        }
      } catch (e) {
        console.log('Error decoding token:', e);
        localStorage.removeItem('token');
        localStorage.setItem('isAuth', false)
      }
    }
    */
  }, []);

  const login = (userCredentials, token) => {
    localStorage.setItem('token', token);
    setUser(userCredentials);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
