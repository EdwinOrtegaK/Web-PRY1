import React, { useState } from 'react';
import '../App.css';

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => setIsChecked(!isChecked);

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={handleToggle} />
      <div className="signup">
      <form>
          <label htmlFor="chk">Login</label>
          <input type="username" name="username" placeholder="Username" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
