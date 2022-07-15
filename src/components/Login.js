import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import background from "./background3.jpg";

const API = 'http://localhost:3000/api/v1'

function Login() {
  const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  ////////////////
  //this is just to test out the auth
  const [loggedInUsername, setLoggedInUsername] = useState('')
  //^^^^^^^^


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
    navigate('/login'); //change back to / after auth is tested/////////
  }

//just here to test the auth/////////
  function getProfile() {
    fetch(`${API}/profile`, {
      method: 'GET',
      headers: { 
        Accepts: 'application/json',
      'Content-type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
    })
    .then((res) => res.json())
    .then(json => {
      console.log('got profile', json);
    setLoggedInUsername(json.username);
    })
  }
//^^^^^/////////////////


  return (
    <div>
      <div id="login-page" style={{ backgroundImage: `url(${background})`}}>
      <h1 id="login-header">Login</h1>
      <form className="user-forms" onSubmit={submitLogin}>
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
      <p>Don't have an account? <Link to='/createaccount'>Sign up here!</Link>
      </p>

{/* /////just here to test out the auth////// */}
{!loggedInUsername ?
      <button onClick={getProfile}>Get Profile</button> :
      <div>Username: {loggedInUsername}</div>
}
{/*  ^^^^^^/////////////*/}

    </div>
    <Footer />
    </div>
  );
}

export default Login;