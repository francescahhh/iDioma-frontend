import { useState } from "react";
import React from "react";

const API = 'http://localhost:3000/api/v1'

function CreateAccount() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function submitNewAccount(e) {
        e.preventDefault()
        fetch(`${API}/users`, {
            method: 'POST',
            headers: {
                Accepts: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify( { user: {username, password} } )
        })
        .then((res) => res.json())
        .then(console.log);
    }

    return (
        <div>
            <h1>Create Account</h1>
            <form onSubmit={submitNewAccount}>
                <div>
                    <input 
                    type="text" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} name="username" 
                    placeholder="Username" 
                    />
                </div>
                <div>
                    <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} name="password" 
                    placeholder="Password"
                     />
                </div>
                <button type="submit" 
                >Create Account
                </button>
            </form>
        </div>
    );
}

export default CreateAccount;