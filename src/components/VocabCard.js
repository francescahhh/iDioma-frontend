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
              return <p key={w}> word: {word.word} | definition: {word.definition} | source: {word.source}</p>
            })}
          </span>
      )
    }
    
    export default VocabCard;