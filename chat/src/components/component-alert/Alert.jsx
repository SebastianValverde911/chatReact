import React from "react";
import './Alert.css';
import { useSelector } from "react-redux";

const Alert = () => {
    const {isActive, type, message} = useSelector((state)=>state.alert);
    let icon = 'x';
    if(type === 'success') {
        icon = 'check';
    } else if (type === 'info') {
        icon = 'person-fill';
    }
    return(
        <div className="container-mensaje">
            {isActive ? (<div className={`mensaje ${type}`}>
                <div>
                    <i className={`bi bi-${icon}`}></i>
                </div>
                <div>
                    {message}
                </div>
            </div>) : (<></>) }
            
        </div>
    )
}
 
export default Alert;