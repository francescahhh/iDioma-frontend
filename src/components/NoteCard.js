import React, { useState, useEffect } from "react";

const API = 'http://localhost:3000'

function NoteCard() {
    const [noteData, setNoteData] = useState([]);

    useEffect(() => {
        fetch(`${API}/notes`)
          .then(res => res.json())
          .then(setNoteData)}, []);

    function handleDeleteClick(id) {
       fetch(`${API}/notes/${id}`, {
        method: "DELETE",
    }).then((res) => {
        if (res.ok) {
            setNoteData(noteData.filter((note) => note.id !== id))
      }
    }); 
}

    return (
        <div>
            <ul className="cards">
          {noteData.map((note) => ( <li className="note-card" key={note.id}>{note.content}<br></br>
            <button type="submit" className="card-buttons" onClick={() => handleDeleteClick(note.id)}>Delete</button>
            <button className="card-buttons">Edit</button>
          </li>
          ))}
          </ul>
        </div>
    )
  }

  export default NoteCard;