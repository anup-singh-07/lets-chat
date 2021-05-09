import React from 'react';

import MessageForm from './Messages/MessageForm.js';
import SentMessage from './Messages/SentMessage.js';
import RecieveMessage from './Messages/RecieveMessage.js';

const ChatFeed = props => {
    // console.log(props);
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];
    // console.log(chat, userName, messages);

    const messageReaders = (message, isMyMsg) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div 
                key={`read_${index}`}
                className='read-receipt'
                style={{
                    float: isMyMsg ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    const renderMsg = () => {
        const keys = Object.keys(messages);
        //keys are specific id for the messages 
        return keys.map((key, index) => {
            const msg = messages[key];
            const lastMsgKey = index === 0 ? null : keys[index - 1];
            const isMyMsg = userName === msg.sender.username;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className='message-block'>
                        {isMyMsg
                            ? <SentMessage message={msg}  />
                            : <RecieveMessage message={msg} lastMessage={messages[lastMsgKey]} />
                        }
                    </div>
                    <div
                        className='read-receipts'
                        style={{
                            marginRight: isMyMsg ? '18px' : '0px',
                            marginLeft: isMyMsg ? '0px' : '68px'
                        }}>
                            {messageReaders(msg, isMyMsg)}
                     </div>
                </div>
            )
        })
    }
    if (!chat) return 'Loading...';

    return (
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>
                    {chat.title}
                </div>
                <div className='chat-subtitle'>
                    {chat.people.map((person) => `${person.person.username}  `)}
                </div>
            </div>
            {renderMsg()}
            <div style={{ height: '100px' }}></div>
            <div className='message-form-container'>
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;