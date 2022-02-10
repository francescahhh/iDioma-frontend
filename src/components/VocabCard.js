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

    return (
          <span>
            {wordData.map((word, w) => {
              return <p className="vocab-card" key={w}> <strong>Word:</strong> {word.word} <br></br> <strong>Definition:</strong> {word.definition} <br></br> <strong>Source:</strong> {word.source}</p>
            })}
          </span>
      )
    }
    
    export default VocabCard;