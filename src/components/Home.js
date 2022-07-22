import React from "react";
import background from "./background3.jpg";
import Footer from "./Footer";

function Home() {
  return (
    <div>
    <div id="home-page" style={{ backgroundImage: `url(${background})`}}>
      <h2 className="fade-in-text">Welcome to iDioma!</h2>
      <h3 className="fade-in-text">iDioma is a place where you can store vocabulary and notes while on the path to fluency in another language.</h3>
      </div>
      <Footer />
    </div>
  );
}

export default Home;


  ////////////////
  //this is just to test out the auth
  // const [loggedInUsername, setLoggedInUsername] = useState('')
  //^^^^^^^^


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


// {/* /////just here to test out the auth////// */}
// {/* {!loggedInUsername ? (
//       <button onClick={getProfile}>Get Profile</button> 
//   ) : (
//   <>
//       <div>Username: {loggedInUsername}</div>
//       <button onClick={resetProfile}>Reset</button> 
//   </>
// )} */}
// {/*  ^^^^^^/////////////*/}

