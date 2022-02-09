import React, { useState, useEffect } from "react";
import VocabCard from "./VocabCard";
import VocabForm from "./VocabForm";

const API = 'http://localhost:3000'

export default function VocabContainer() {
  const [words, setWords] = useState([])

  useEffect(() => {
      fetch(`${API}/words`) 
      .then(res => res.json())
      .then(data => setWords(data))
  }, []);

  function handleAddWord(newWord) {
    setWords([...words, newWord]);
  }

    return (
      <div>
        <h1>Vocab Page</h1>
        <VocabCard words={words} />
        <VocabForm onAddWord={handleAddWord} />
        <VocabCard />
        <VocabCard />
        <VocabCard />
      </div>
    );
  }
