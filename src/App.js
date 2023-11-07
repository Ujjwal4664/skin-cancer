import React, { useState } from 'react';
import Login from './pages/loginpage';
import Register from './pages/registerpage';
import Home from './pages/homepage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsRegistering(false);
  };

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home />
      ) : isRegistering ? (
        <Register onRegister={handleRegister} onToggle={handleToggle} />
      ) : (
        <Login onLogin={handleLogin} onToggle={handleToggle} />
      )}
    </div>
  );
}

export default App;