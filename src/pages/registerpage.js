import React, { useState } from 'react';

function Register({ onRegister, onToggle }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: '',
    age: '',
  });

  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    // You can add your registration logic here
    // For this example, we'll just simulate registration
    setRegistered(true);
    onRegister();
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
      <h1>Register Component</h1>
      {registered ? (
        <p>Registration successful. Click the button to go to the Home Component.</p>
      ) : (
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />

          <button onClick={handleRegister}>Register</button>
          <p>
            Already have an account?{' '}
            <span onClick={onToggle}>Login here</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Register;