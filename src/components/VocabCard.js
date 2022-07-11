import React, { useState, useEffect } from "react";

const API = 'http://localhost:3000'

const VocabCard = () => {
    const [wordData, setWordData] = useState([]);

    useEffect(() => {
        fetch(`${API}/words`)
          .then(res => res.json())
          .then(setWordData)}, []);


    function handleDeleteClick(id) {
        fetch(`${API}/words/${id}`, {
         method: "DELETE",
        })
        .then((res) => {
         if (res.ok) {
             setWordData(wordData.filter((word) => word.id !== id))
         }
    });
}

    return (
          <span>
            {wordData.map((word, w) => {
              return <p className="vocab-card" key={w}> <strong>Word:</strong> {word.word} 
              <br></br> 
              <strong>Definition:</strong> {word.definition} <br></br>
            <strong>Source:</strong> {word.source}
            <br></br>
            <button type="submit" className="card-buttons" onClick={() => handleDeleteClick(word.id)}>Delete</button>
            {/* <button className="card-buttons">Edit</button> */}
            </p>
            })}
          </span>
      )
    }
    
    export default VocabCard;