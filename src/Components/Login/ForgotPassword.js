import React, { useState } from 'react';

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Forgot Password Email Submitted:", email);
  };

  return (
    <div className="forgot-password-box">
      <h2 className="forgot-password-title">Forgot Password</h2>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <div className="forgot-password-group">
          <input
            type="email"
            className="forgot-password-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="forgot-password-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
