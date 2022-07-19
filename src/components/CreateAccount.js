import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import background from "./background3.jpg";
import useFetchApi from "../lib/useFetchApi";
import useUserState from "../lib/useUserState";

function CreateAccount() {
    const navigate = useNavigate();
    const registerAPI = useFetchApi('/users', onRegisteredAccount, 'POST');
    const [user, updateUserState, resetUser] = useUserState();

    function onRegisteredAccount(data) {
        console.log('REGISTERED', data);
    }

    function submitNewAccount(e) {
        e.preventDefault();
        registerAPI({ user });
        resetUser();
        navigate('/login');
    }
    
    return (
        <div>
        <div id="create-account-page"  style={{ backgroundImage: `url(${background})`}}>
            <h1>Create Account</h1>
            <form className="user-forms" onSubmit={submitNewAccount}>
                <div>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        name="username"
                        value={user.username}
                        onChange={updateUserState}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={user.password} 
                        onChange={updateUserState}
                    />
                </div>
                <button type="submit"
                >Create Account
                </button>
            </form>
            <p>Already have an account? <Link to='/login'>Login here!</Link>
            </p>
            </div>
            <Footer />
        </div>
    );
}

export default CreateAccount;