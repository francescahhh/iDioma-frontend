import React, { useState, useEffect } from "react";

const API = 'http://localhost:3000'

function NoteCard() {
    const [noteData, setNoteData] = useState([]);

    const getNoteData = () => {
        fetch(`${API}/notes`)
       .then(res => {
           return res.json()
       })
       .then(data => {
           setNoteData(data)
       })
    }

    useEffect(() => {
        getNoteData();
    }, []);


    function handleDeleteClick(id) {
       fetch(`${API}/notes/${id}`, {
        method: "DELETE",
    }).then((r) => {
        if (r.ok) {
            noteData.filter((note) => note.id !== id)
        }
    }); }

    return (
        <span>
          {noteData.map((note) => {
            return <p className="note-card" key={note.id}>{note.content}
            <br></br>
            <button type="submit" className="card-buttons" onClick={() => handleDeleteClick(note.id)}>Delete</button>
            <button className="card-buttons">Edit</button>
            </p>
          })}
        </span>
    )
  }
    
    export default NoteCard;