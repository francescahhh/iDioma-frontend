import React, { useState, useEffect }from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VocabContainer from "./VocabContainer";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import NotesContainer from "./NotesContainer";
import NavBar from "./NavBar";

const API = 'http://localhost:3000'

export default function App() {
  const [user, setUser] = useState()
  
  return (
    <div>
      <h1>iDioma</h1>
      <NavBar />
      <Routes>
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}/>
        <Route path="/vocab" element={<VocabContainer />} />
        <Route path="/notes" element={<NotesContainer />} />
      </Routes>
      </div>
  );
}

