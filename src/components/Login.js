import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import background from "./background3.jpg";
import useFetchApi from "../lib/useFetchApi";
import useUserState from "../lib/useUserState";

function Login() {
  const navigate = useNavigate();
  const [user, updateUserState, resetUser] = useUserState();
  const loginApi = useFetchApi('/login', onLoggedIn, 'POST');

  function submitLogin(e) {
    e.preventDefault();
    loginApi({ user: { username: user.username, password: user.password }});
    resetUser({});
    navigate('/'); 
  }

function onLoggedIn(json) {
  console.log('LOGGED IN:', json.jwt);
  localStorage.setItem('jwt', json.jwt);
}

  return (
    <div>
      <div id="login-page" style={{ backgroundImage: `url(${background})`}}>
      <h1 id="login-header">Login</h1>
      <form className="user-forms" onSubmit={submitLogin}>
        <div>{' '}
          <input
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={updateUserState}
            />
        </div>
        <div>{' '}
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={updateUserState}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to='/createaccount'>Sign up here!</Link>
      </p>
    </div>
    <Footer />
    </div>
  );
}

export default Login;