import React, { useState, useEffect } from "react";

export const SignupView = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const hasValue = (name) => formData[name].length > 0;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const [error, setError] = useState("");
  const [animateError, setAnimateError] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    if (error) {
      setAnimateError(true);
    }
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setAgreedToTerms(e.target.checked); // Update checkbox state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email.includes("@")) {
      setError("invalid_email");
      setAnimateError(true);
    } else if (password !== confirmPassword) {
      setError("password_mismatch");
      setAnimateError(true);
    } else {
      setAnimateError(false);
      setError("");
      console.log("Form Submitted:", formData);
      setFormData({ email: "", password: "", confirmPassword: "" });
      setAgreedToTerms(false);
    }
  };

  const getErrorMessage = (error) => {
    switch (error) {
      case "invalid_email":
        return "Oops! That doesn't look like a valid email 📧";
      case "password_mismatch":
        return "Passwords don't match! Try again 🔒";
      default:
        return "Something went wrong! 😵‍💫";
    }
  };

  return (
    <div className="signUpBox">
      <h2 className="login-title">Sign Up</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="signupGroup">
          <input
            className="username"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className={hasValue("email") ? "float" : ""}>Email</label>
        </div>

        <div className="signupGroup2 password-field">
          <input
            className="pass"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className={hasValue("password") ? "float" : ""}>
            Password
          </label>
          <button
            type="button"
            className="toggle-password-btn"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "👁️" : "🙈"}
          </button>
        </div>

        <div className="signupGroup3 password-field">
          <input
            className="pass"
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className={hasValue("confirmPassword") ? "float" : ""}>
            Re-enter Password
          </label>
          <button
            type="button"
            className="toggle-password-btn"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? "👁️" : "🙈"}
          </button>
        </div>

        {error && (
          <div className={`error-message ${animateError ? "show" : ""}`}>
            <p>{getErrorMessage(error)}</p>
          </div>
        )}

        <div className="terms-container">
          <input
            type="checkbox"
            id="agreeTerms"
            checked={agreedToTerms}
            onChange={handleCheckboxChange}
            required
          />
          <h5 htmlFor="agreeTerms">
            I agree to the <a href="/privacy-policy">Privacy Policy</a> and{" "}
            <a href="/terms-of-service">Terms of Service</a>.
          </h5>
        </div>

        <button type="submit" className="login-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};
