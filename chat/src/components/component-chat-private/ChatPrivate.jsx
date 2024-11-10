import React from "react";
import './ChatPrivate.css';

export const ChatPrivate = (data) => {
    const handleMinChatPrivate = (e) => {
        debugger;
    }

    const handleMaxChatPrivate = () => {

    }

    return(
        <div className="container-chat-private" data-id={data.id}>
            <div className="header-chat">
                <div className="container-name-chat-private">
                    <div className="name-chat-private">
                        {data.name}
                    </div>
                    <div className="status-name-chat-private">

                    </div>
                </div>
                <div className="icon-min-close">
                    <div className="icons" onClick={e => handleMinChatPrivate(e)}><i className="bi bi-dash"></i></div>
                    <div className="icons" onClick={() => data.removeChatLeftContainer(data.id)}><i className="bi bi-x"></i></div>
                </div>
            </div>
            <div className="container-chat">Contenedor</div>
            <div className="input-chat">
                <div className="container-input-send-message">
                    <input type="text" />
                </div>
                <div className="container-btn-send-message">
                    <div class="btn-send"><i className="bi bi-send"></i></div>
                </div>
            </div>
        </div>
    )
}