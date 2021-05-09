import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[error, setError] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        //username | password 
        const authData = {
            'Project-ID': '32ae9fa3-30ba-4aef-b8d9-0734fbebefa1',
            'User-Name': username,
            'User-Secret': password
        }
        //?chatengine -> give messages
        try {
            await axios.get('https://api.chatengine.io/chats',
                { headers: authData });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        }
        //:error -> check other credentials
        catch { 
            setError('Sorry!! Wrong Credentials');
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Login to Chat</h1>
                <form onSubmit={onSubmitHandler}>
                    <input type='text' value={username} placeholder="Username" className='input' onChange={(e) => setUsername(e.target.value)} required />
                    <input type='password' value={password} placeholder="Password" className='input' onChange={(e) => setPassword(e.target.value)} required />
                    <div align='center'>
                        <button type='submit' className="button">
                            <span>Let's Chat</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default Login;