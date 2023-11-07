import React, { useState } from 'react';

function Login({ onLogin, onToggle }) {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // You can add your login authentication logic here
    // For this example, we'll just simulate a successful login
    setLoggedIn(true);
    onLogin();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Login Component</h1>
      {loggedIn ? (
        <p>You are logged in. Click the button to go to the Home Component.</p>
      ) : (
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email or Username"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <span onClick={onToggle}>Register here</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;