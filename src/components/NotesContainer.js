import React, { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import NoteForm from "./NoteForm";

const API = 'http://localhost:3000'

export default function NotesContainer() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch(`${API}/notes`)
      .then(res => res.json())
      .then(data => setNotes(data))
  }, []);

  function handleAddNote(newNote) {
    setNotes([...notes, newNote]);
  }

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteCard />
    </div>
  );
}
