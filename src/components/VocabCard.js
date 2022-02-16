import React, { useState, useEffect } from "react";

const API = 'http://localhost:3000'

const VocabCard = () => {
    const [wordData, setWordData] = useState([]);

    const getWordData = () => {
        fetch(`${API}/words`)
       .then(res => {
           return res.json()
       })
       .then(data => {
           setWordData(data)
       })
    }

    useEffect(() => {
        getWordData();
    }, []);

    //maybe need to move gets and deletes to different components???? --add edits to the same as deletes???

    function handleDeleteClick(id) {
        fetch(`${API}/words/${id}`, {
         method: "DELETE",
     }).then((r) => {
         if (r.ok) {
             wordData.filter((word) => word.id !== id)
         }
     }); }


    return (
          <span>
            {wordData.map((word, w) => {
              return <p className="vocab-card" key={w}> <strong>Word:</strong> {word.word} 
              <br></br> 
              <strong>Definition:</strong> {word.definition} <br></br>
            <strong>Source:</strong> {word.source}
            <br></br>
            <button type="submit" className="card-buttons" onClick={() => handleDeleteClick(word.id)}>Delete</button>
            <button className="card-buttons">Edit</button>
            </p>
            })}
          </span>
      )
    }
    
    export default VocabCard;