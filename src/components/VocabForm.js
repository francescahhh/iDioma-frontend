import React, { useState } from "react";

const API = 'http://localhost:3000'

function VocabForm({ onAddWord }) {
    const [formData, setFormData] = useState({
        word: "",
        definition: "",
        source: "",
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit() {
        // e.preventDefault() ----> and add e in parentheses if you want to prevent the page from auto refreshing after submit 

        const newWord = {
            ...formData
        }

        fetch(`${API}/words`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newWord),
        })
            .then((res) => res.json())
            .then((newWord) => {
                setFormData({
                    word: "",
                    definition: "",
                    source: "",
                })
                onAddWord(newWord)
            })
    }

    return (
        <form onSubmit={handleSubmit} className="Submission-form">
            <label>Submit a new vocabulary word: </label>
            <input
                type="text"
                name="word"
                onChange={handleChange}
                value={formData.word}
                placeholder="Word"
            />

            <input
                type="text"
                name="definition"
                onChange={handleChange}
                value={formData.definition}
                placeholder="Definition"
            />

            <input
                type="text"
                name="source"
                onChange={handleChange}
                value={formData.source}
                placeholder="Source"
            />

            <button type="submit" >Add Word</button>
        </form>
    )
}

export default VocabForm;