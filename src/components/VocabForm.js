import React from "react"
import { useState } from "react";

function VocabForm() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  return (
    <form className="Submission-form">
      <label>Submit a new vocabulary word: </label>
        <input
          type="text" 
          value={word}
          placeholder="Word"
          onChange={(e) => setWord(e.target.value)}
        />
     
      <input
        type="text"
        value={definition}
        placeholder="Definition"
        onChange={(e) => setDefinition(e.target.value)}
      />

    <input
        type="text"
        value={source}
        placeholder="Where you encountered this word"
        onChange={(e) => setSource(e.target.value)}
    />

    <input
        type="text"
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
    />

      <button type="submit" >Add Word</button>
    </form>
  )
}

export default VocabForm;