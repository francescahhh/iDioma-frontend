import React, { useState } from "react"

function NoteForm( { onAddNote } ) {
    const [formData, setFormData ] = useState({
        content: "",    
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newNote = {
            ...formData }

        fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newNote),
        })
            .then((res) => res.json())
            .then((newNote) => {
                setFormData({
                    content: "",
                })
                onAddNote(newNote)
            })
    }

  return (
    <form onSubmit={handleSubmit} className="Submission-form">
      <label>New Note: </label>
        <input
          type="text" 
          name="content"
          onChange={handleChange}
          value={formData.content}
          placeholder="Write a new note here..."
        />
      <button type="submit" >Add Note</button>
    </form>
  )
}

export default NoteForm;