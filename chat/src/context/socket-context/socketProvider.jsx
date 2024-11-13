import React,{ useEffect,useState} from "react";
import io from 'socket.io-client';
import {SocketContext} from './socketContext';

export const  SocketProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [userStatus, setUserStatus] = useState({});

    useEffect(()=>{
        /* const newSocket = io("http://127.0.0.1:4000"); */
        const newSocket = io("gentle-contentment-production.up.railway.app");
        setSocket(newSocket);

         // Escuchar la actualización del estado de los usuarios conectados
        newSocket.on('updateUserStatus', (users) => {
            setUserStatus((prevStatus) => ({
                ...prevStatus,
                [users.id]: 'connected',
            }));
        });

       // Escuchar el evento de conexión del usuario
        newSocket.on('userConnected', (status) => {
            setUserStatus((prevStatus) => ({
                ...prevStatus,
                [status.id]: 'connected',
            }));
        });

        // Escuchar el evento de desconexión del usuario
        newSocket.on('userDisconnected', (status) => {
            setUserStatus((prevStatus) => ({
                ...prevStatus,
                [status.id]: 'disconnected',
            }));
        });

        return () => {
            newSocket.close();
        }
    },[]);
    
    return(
        <SocketContext.Provider value={{socket,userStatus}}>
            {children}
        </SocketContext.Provider>
    );
};
