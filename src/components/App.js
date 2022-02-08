import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Vocab from "./Vocab";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Notes from "./Notes";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <h1>iDioma</h1>
      <NavBar />
      <Routes>
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}/>
        <Route path="/vocab" element={<Vocab />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
      </div>
  );
}

export default App;
