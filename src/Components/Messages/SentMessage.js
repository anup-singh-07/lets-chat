import React from 'react';

const SentMessage = ({ message }) => {
    if (message.attachments.length > 0) { //this means message is an image
        return (
            <img
                src={message.attachments[0].file}
                alt='Pic Not Found'
                className='message-image'
                style={{ float: 'right' }}
            />
        )
    }
    return (
        <div className='message' style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
            {message.text}
        </div>
    )
}

export default SentMessage;
