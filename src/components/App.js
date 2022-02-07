import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Vocab from "./Vocab";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Notes from "./Notes";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <h1>Language App</h1>
      <NavBar />
      <Routes>
        <Route path="/vocab" element={<Vocab />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/" element={<Home />}/>
      </Routes>
      </div>
  );
}

export default App;
