import React, { useState } from 'react';
import axios from 'axios';

function Authentication() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      setUser(response.data.user);
      setLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Authentication;
