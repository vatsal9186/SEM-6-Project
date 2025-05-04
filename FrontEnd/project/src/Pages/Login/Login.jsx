/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }
    setError('');
    // alert('Login successful');
    // Handle login logic here

    console.log('Login data:', { email, password });

    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (data.message === 'Login successful') {
        alert('Login successful');
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = "http://localhost:5173/" // Store user data in local storage
        // Redirect to login page or perform any other action
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back!</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <button type="submit">Login</button>
          <p className="signup-link">
            Dont have an account? <a href="/Registration">Sign up</a>
          </p>
          {/* <p className="a-login">
           <span className='SPAN'> Admin Login?</span>
            <a href="/admin-login">A_login</a>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;