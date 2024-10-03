import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css'; // Import the CSS file

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    // Perform your login logic here
    console.log('Logging in with', { username, password });
    
    // Clear the form
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}
          
          <div className="input-container">
            <label>Username</label>
            <i className="icon fa fa-user"></i>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="input-container">
            <label>Password</label>
            <i className="icon fa fa-lock"></i>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/username">Sign Up</Link></p> {/* Use Link for navigation */}
        </div>
      </div>

      <div className="welcome-section">
        <h2>WELCOME BACK!</h2>
        <p>Measure your daily goles by logging in</p>
      </div>
    </div>
  );
};

export default UserLogin;