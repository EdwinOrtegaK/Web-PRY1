import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, token } = useAuth();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch('/api/verify-token', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        setIsValid(false);
      }
    };

    if (token) {
      verifyToken();
    }
  }, [token]);

  if (!user || !isValid) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ProtectedRoute;
