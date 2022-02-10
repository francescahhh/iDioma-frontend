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

    return (
        <div>
          {noteData.map((note, n) => {
            return <p className="note-card" key={n}>{note.content}</p>
          })}
        </div>
    )
  }
    
    export default NoteCard;