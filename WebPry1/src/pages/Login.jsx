import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../autenticacion/AuthContext'
import '../App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthData } = useContext(AuthContext);
  const history = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Suponiendo que tienes una función para autenticar al usuario
      const isAuthenticated = await authenticateUser(username, password);
      if (isAuthenticated) {
        setAuthData({ username });
        navigate('/crud');
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
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
