import React, { useState,useEffect } from "react";
import './Home.css';
import CardContac from "../component-card-contact/CardContac";
import {ChatPrivate} from "../component-chat-private/ChatPrivate";

const Home = () => {
    const [userData, setUserData] = useState(null);
    const [chatsData, setChatsData] = useState([]);

    useEffect(()=>{
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/');
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.log("Error cargando los usuarios");
            }
        }

        fetchUserData();
    },[]);

    const printChatLeftContainer = (data) => {
        const dataUser = userData.find(userData => userData.id === data);
        const verifyUser = chatsData.find(el => el.id === dataUser.id);
        if(verifyUser === undefined) {
            setChatsData([...chatsData,dataUser]);
        }
    }
    
    const removeChatLeftContainer = (id) => {
        const newChat = chatsData.filter(elemt => elemt.id !== id);
        setChatsData(newChat);

    }

    return (
        <div className="containar-component-home">
            <div className="container-left">
                <div className="container-chat-private-home">
                    {
                        chatsData.length > 0 ? (
                            chatsData.map((chat => (
                                <ChatPrivate key={chat.id} id={chat.id} name={chat.name} email={chat.email} removeChatLeftContainer = {removeChatLeftContainer} />
                            )))
                        ) : (<></>)
                        
                    }
                </div>
            </div>
            <div className="container-right">
                <div className="search-contacts">
                    <div>Buscar:</div>
                    <div className="container-input-search">
                        <input type="text"/>
                    </div>
                </div>
                <div className="container-contacts">
                    {userData !== null ? <> {userData.map(user => (
                    <CardContac key={user.id} id={user.id} name={user.name} email={user.email} printChatLeftContainer={printChatLeftContainer} />
                ))}</> : <></>}
                </div>
            </div>
        </div>
    )
};

export default Home;