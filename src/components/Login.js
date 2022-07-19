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


  ////////////////
  //this is just to test out the auth
  // const [loggedInUsername, setLoggedInUsername] = useState('')
  //^^^^^^^^

  function submitLogin(e) {
    e.preventDefault();
    loginApi({ user: { username: user.username, password: user.password }});
    resetUser({});
    navigate('/'); 
  }

//just here to test the auth/////////
//   function getProfile() {
//     fetch(`${API}/profile`, {
//       method: 'GET',
//       headers: { 
//         Accepts: 'application/json',
//       'Content-type': 'application/json',
//       'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//     }
//     })
//     .then((res) => res.json())
//     .then(json => {
//       console.log('got profile', json);
//     setLoggedInUsername(json.username);
//     })
//   }

//   function resetProfile() {
//     setLoggedInUsername();
//   }
// //^^^^^/////////////////

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


{/* /////just here to test out the auth////// */}
{/* {!loggedInUsername ? (
      <button onClick={getProfile}>Get Profile</button> 
  ) : (
  <>
      <div>Username: {loggedInUsername}</div>
      <button onClick={resetProfile}>Reset</button> 
  </>
)} */}
{/*  ^^^^^^/////////////*/}


    </div>
    <Footer />
    </div>
  );
}

export default Login;