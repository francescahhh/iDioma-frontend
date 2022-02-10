import React, { useState, useEffect } from "react";
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
    <div id="App">
      <img id ="logo" src="https://res.cloudinary.com/dqms0calh/image/upload/v1644519787/Screen_Shot_2022-02-10_at_11.58.28_AM_xrsw2g.png" alt="iDioma" />
      <NavBar />
      <Routes>
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/vocab" element={<VocabContainer />} />
        <Route path="/notes" element={<NotesContainer />} />
      </Routes>
    </div>
  );
}

