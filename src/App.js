import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed.js';
import './App.css';
import Login from './Components/Authentication/Login.js';

const projectID = '32ae9fa3-30ba-4aef-b8d9-0734fbebefa1';

const App = () => {
    if (!localStorage.getItem('username')) return <Login />
    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatProps) => <ChatFeed {...chatProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App;