import React from "react"
import { useState } from "react";

function NoteForm() {
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");

  return (
    <form className="Submission-form">
      <label>New Note: </label>
        <input
          type="text" 
          value={note}
          placeholder="Write a new note here..."
          onChange={(e) => setNote(e.target.value)}
        />

    <input
        type="text"
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
    />

      <button type="submit" >Add Note</button>
    </form>
  )
}

export default NoteForm;