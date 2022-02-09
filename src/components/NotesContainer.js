import React from "react";
import NoteCard from "./NoteCard";
import NoteForm from "./NoteForm";

function Notes() {
    return (
      <div>
        <h1>Notes Page</h1>
        <NoteForm />
        <NoteCard />
      </div>
    );
  }

  export default Notes;