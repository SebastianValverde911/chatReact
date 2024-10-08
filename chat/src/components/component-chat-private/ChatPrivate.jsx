import React from "react";
import './ChatPrivate.css';

export const ChatPrivate = () => {
    return(
        <div className="container-chat-private">
            <div className="header-chat">
                <div className="container-name-chat-private">
                    <div className="name-chat-private">
                        Sebastian Valverde
                    </div>
                    <div className="status-name-chat-private">

                    </div>
                </div>
                <div className="icon-min-close">
                    <div className="icons"><i className="bi bi-dash"></i></div>
                    <div className="icons"><i className="bi bi-x"></i></div>
                </div>
            </div>
            <div className="container-chat">Contenedor</div>
            <div className="input-chat">input</div>
        </div>
    )
}