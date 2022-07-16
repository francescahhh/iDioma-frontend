import { useState } from "react";

const emptyUser = { username: '', password: ''} ;

export default function useUserState() {
    const [user, setUser] = useState(emptyUser);

    function updateUserState(e) {
        const key = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [key]: value });
    }

    function resetUser() {
        setUser(emptyUser);
    }

    return [user, updateUserState, resetUser, setUser];
}