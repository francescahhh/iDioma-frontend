import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const API = 'http://localhost:3000/api/v1'

function Login() {
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  function submitLogin(e) {
    e.preventDefault();

    const loginData = {
      user: { username: loginUsername, password: loginPassword },
    };

    fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((json) => localStorage.setItem('jwt', json.jwt));

    setLoginUsername('')
    setLoginPassword('')
    navigate('/vocab');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <div>{' '}
          <input
            type="text"
            placeholder="Username"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)} />
        </div>
        <div>{' '}
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? Sign up here!</p>
    </div>
  );
}

export default Login;