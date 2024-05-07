import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../autenticacion/AuthContext'
import '../App.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const response = await fetch('https://api.tiburoncin.lat/22305/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'username': username,
          'password': password
        }
      });

      const data = await response.json();

      if (response.ok) {
        login({ username });
        navigate('/admin/crud');
      } else {
        alert(data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <div className="main">
      <div className="signup">
        <form onSubmit={handleLogin}>
          <label htmlFor="chk">Login</label>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
