import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { useHistory } from 'react-router-dom';

export const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    login({ email, password });
    history.push('/home'); // Redirect to the home page after successful login
  };

  return (
    <div className="loginBox">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="group">
          <input
            type="email"
            className="login-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login-group">
          <input
            type="password"
            className="login-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forgot-password-link">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        
      </form>
    </div>
  );
};
