import React, { useState,useEffect } from "react";
import './Home.css';
import CardContac from "../component-card-contact/CardContac";
import {ChatPrivate} from "../component-chat-private/ChatPrivate";

const Home = () => {
    const [userData, setUserData] = useState(null);

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
        debugger;
        const dataUser = userData.find(userData => userData.id === data);

    }

    return (
        <div className="containar-component-home">
            <div className="container-left">
                <div className="container-chat-private-home">
                    <ChatPrivate />
                    <ChatPrivate />
                    <ChatPrivate />
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