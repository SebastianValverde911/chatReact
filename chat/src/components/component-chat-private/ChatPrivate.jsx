import React, { useState } from "react";
import './ChatPrivate.css';

export const ChatPrivate = (data) => {
    const [inputValue, setInputValue] = useState(''); 
    const [messages, setMessages] = useState([]); 

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        if (inputValue.trim() !== '') { 
          setMessages([...messages, inputValue]);
          setInputValue('');
        }
      };

    return(
        <div className="container-chat-private" data-id={data.id}>
            <div className="header-chat">
                <div className="new-status">
                    <div className="status-name-chat-private"></div>
                </div>
                <div className="container-name-chat-private">
                    <div className="name-chat-private">
                        {data.name}
                    </div>
                </div>
                <div className="icon-min-close">
                    <div className="icons" onClick={() => data.removeChatLeftContainer(data.id)}><i className="bi bi-x"></i></div>
                </div>
            </div>
            <div className="container-chat">
            {messages.map((message, index) => (
                <div key={index} className="message-send-user">
                    {message}
                </div>
            ))}
            </div>
            <div className="input-chat">
                <div className="container-input-send-message">
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder="Escribe algo aquí" 
                    />
                </div>
                <div className="container-btn-send-message">
                    <div className="btn-send" onClick={handleButtonClick}><i className="bi bi-send"></i></div>
                </div>
            </div>
        </div>
    )
}