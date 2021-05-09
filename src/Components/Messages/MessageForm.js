import React, { useState } from 'react';
import { sendMessage } from 'react-chat-engine';
import { PictureFilled, SendOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { creds, chatId } = props;
    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }
    const onSumbitHandler = (e) => {
        e.preventDefault();
        const text = value.trim();
        if (text.length > 0) sendMessage(creds, chatId, { text });
        setValue('');
    }
    const imageUplaodHandler = (e) => {
        sendMessage(creds, chatId, { files: e.target.files })
    }
    return (
        <form className='message-form' onSubmit={onSumbitHandler}>
            <input
                className='message-input'
                placeholder='Type a message...'
                value={value}
                onChange={onChangeHandler}
                onSubmit={onSumbitHandler} />
            <label htmlFor='upload-button'>
                <span className='image-button'>
                    <PictureFilled />
                </span>
            </label>
            <input
                type='file'
                multiple={false}
                id='upload-button'
                style={{ display: 'none' }}
                onChange={imageUplaodHandler}
            />
            <button type='submit' className='send-button'>
                <SendOutlined />
            </button>
        </form>
    )
}

export default MessageForm;