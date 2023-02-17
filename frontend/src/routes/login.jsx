import React, { useState } from 'react';
 function LogIn() {
    return <p>Login</p>

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsername} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePassword} />
            </label>
            <input type="submit" value="Login" />
        </form>
    );
    
}



export default LogIn;