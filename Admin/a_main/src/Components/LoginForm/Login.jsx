import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return;
    }

    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/adminlogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.message === "Login Successful") {
        alert("Admin login successful");
        console.log("Saving admin to localStorage:", data.admin);
        localStorage.setItem("admin", JSON.stringify(data.ad));
        navigate("/addcategory");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <input
              className="login-input"
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password-wrapper">
            <input
              className="login-input password-input"
              type={showPassword ? "text" : "password"}
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
