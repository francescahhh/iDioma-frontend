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